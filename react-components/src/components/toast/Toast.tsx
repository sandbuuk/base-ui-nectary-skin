import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { Icon } from '../icon'

/**
 * Toast component for displaying temporary notification messages.
 * Use with ToastProvider and useToast hook for programmatic toasts.
 */

const TOAST_TIMEOUT = 5000
const ANIMATION_DURATION = 250

// Toast type
export type ToastType = 'info' | 'warn' | 'error' | 'success'

export type ToastOrigin = 'top-right' | 'bottom-right'

// Individual toast data
export interface ToastData {
  id: string,
  type: ToastType,
  text: string,
  persistent?: boolean,
  action?: React.ReactNode,
  close?: React.ReactNode,
}

// Toast variants using CVA
const toastVariants = cva(
  // Base styles
  [
    'flex',
    'flex-row',
    'items-center',
    'gap-3',
    'w-[328px]',
    'max-w-[90vw]',
    'p-4',
    'box-border',
    'rounded-[var(--sinch-comp-toast-shape-radius)]',
    'shadow-[var(--sinch-comp-toast-shadow)]',
  ],
  {
    variants: {
      type: {
        success: 'bg-[var(--sinch-comp-toast-color-success-default-background)]',
        warn: 'bg-[var(--sinch-comp-toast-color-warning-default-background)]',
        error: 'bg-[var(--sinch-comp-toast-color-error-default-background)]',
        info: 'bg-[var(--sinch-comp-toast-color-info-default-background)]',
      },
    },
    defaultVariants: {
      type: 'info',
    },
  }
)

const iconColorMap = {
  success: 'var(--sinch-comp-toast-color-success-default-icon)',
  warn: 'var(--sinch-comp-toast-color-warning-default-icon)',
  error: 'var(--sinch-comp-toast-color-error-default-icon)',
  info: 'var(--sinch-comp-toast-color-info-default-icon)',
} as const

const textColorMap = {
  success: 'var(--sinch-comp-toast-color-success-default-text)',
  warn: 'var(--sinch-comp-toast-color-warning-default-text)',
  error: 'var(--sinch-comp-toast-color-error-default-text)',
  info: 'var(--sinch-comp-toast-color-info-default-text)',
} as const

const iconNameMap = {
  info: 'circle-info',
  success: 'circle-check',
  warn: 'triangle-exclamation',
  error: 'octagon-exclamation',
} as const

// Individual Toast component props
export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof toastVariants> {
  /** Toast type determines the background color and icon */
  type?: ToastType,
  /** Text content to display */
  text?: string,
  /** If true, toast won't auto-dismiss after 5 seconds */
  persistent?: boolean,
  /** Callback when toast times out */
  onTimeout?: () => void,
  /** Optional action slot (e.g., a button) */
  action?: React.ReactNode,
  /** Optional close slot (e.g., a close button) */
  close?: React.ReactNode,
  /** Content to display (alternative to text prop) */
  children?: React.ReactNode,
}

/**
 * Individual Toast notification component
 */
export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      className,
      type = 'info',
      text,
      persistent = false,
      onTimeout,
      action,
      close,
      children,
      ...props
    },
    ref
  ) => {
    const timeoutRef = useRef<number | null>(null)

    // Handle auto-dismiss timeout
    useEffect(() => {
      if (persistent) {
        // Clear any existing timeout if switched to persistent
        if (timeoutRef.current !== null) {
          window.clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
        return
      }

      // Set timeout for auto-dismiss
      timeoutRef.current = window.setTimeout(() => {
        onTimeout?.()
        timeoutRef.current = null
      }, TOAST_TIMEOUT)

      return () => {
        if (timeoutRef.current !== null) {
          window.clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
      }
    }, [persistent, onTimeout])

    const iconName = iconNameMap[type]
    const iconColor = iconColorMap[type]
    const textColor = textColorMap[type]

    return (
      <div
        ref={ref}
        role="alert"
        aria-atomic="true"
        className={cn(toastVariants({ type }), className)}
        {...props}
      >
        <Icon
          name={iconName}
          iconsVersion="2"
          className="shrink-0"
          style={{ color: iconColor }}
        />
        <div
          className="flex-1 min-w-0 break-words font-[var(--sinch-comp-toast-font-body)]"
          style={{ color: textColor }}
        >
          {text ?? children}
        </div>
        {action}
        {close}
      </div>
    )
  }
)
Toast.displayName = 'Toast'

// ============================================================================
// Toast Context and Manager
// ============================================================================

// Action types for reducer
type ToastAction =
  | { type: 'ADD_TOAST', payload: ToastData }
  | { type: 'REMOVE_TOAST', payload: { id: string } }
  | { type: 'CLEAR_ALL' }

// Toast state
interface ToastState {
  toasts: ToastData[],
}

// Reducer for managing toasts
function toastReducer(state: ToastState, action: ToastAction): ToastState {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      }
    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload.id),
      }
    case 'CLEAR_ALL':
      return {
        ...state,
        toasts: [],
      }
    default:
      return state
  }
}

// Context value type
interface ToastContextValue {
  toasts: ToastData[],
  addToast: (toast: Omit<ToastData, 'id'>) => string,
  removeToast: (id: string) => void,
  clearAll: () => void,
}

// Create context
const ToastContext = createContext<ToastContextValue | null>(null)

// Provider props
export interface ToastProviderProps {
  children: React.ReactNode,
  /** Position of toast container */
  origin?: ToastOrigin,
  /** Disable animations (for reduced motion) */
  reduceMotion?: boolean,
}

/**
 * Toast Provider - Wrap your app with this to enable toast notifications
 *
 * @example
 * ```tsx
 * <ToastProvider origin="bottom-right">
 *   <App />
 * </ToastProvider>
 * ```
 */
export function ToastProvider({
  children,
  origin = 'bottom-right',
  reduceMotion = false,
}: ToastProviderProps) {
  const [state, dispatch] = useReducer(toastReducer, { toasts: [] })

  const addToast = useCallback((toast: Omit<ToastData, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    dispatch({ type: 'ADD_TOAST', payload: { ...toast, id } })
    return id
  }, [])

  const removeToast = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_TOAST', payload: { id } })
  }, [])

  const clearAll = useCallback(() => {
    dispatch({ type: 'CLEAR_ALL' })
  }, [])

  const contextValue = useMemo(
    () => ({
      toasts: state.toasts,
      addToast,
      removeToast,
      clearAll,
    }),
    [state.toasts, addToast, removeToast, clearAll]
  )

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer origin={origin} reduceMotion={reduceMotion} />
    </ToastContext.Provider>
  )
}

/**
 * Hook to access toast functionality
 *
 * @example
 * ```tsx
 * const { addToast, removeToast } = useToast()
 *
 * // Show a toast
 * const id = addToast({ type: 'success', text: 'Saved!' })
 *
 * // Remove it manually
 * removeToast(id)
 * ```
 */
export function useToast() {
  const context = useContext(ToastContext)
  if (context === null) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

// Container props
interface ToastContainerProps {
  origin: ToastOrigin,
  reduceMotion: boolean,
}

/**
 * Internal component that renders the toast list
 */
function ToastContainer({ origin, reduceMotion }: ToastContainerProps) {
  const { toasts, removeToast } = useToast()

  // Determine aria-live based on toast types
  const ariaLive = useMemo(() => {
    // If any toast is error or warn, use assertive
    const hasUrgent = toasts.some(
      (t) => t.type === 'error' || t.type === 'warn'
    )
    return hasUrgent ? 'assertive' : 'polite'
  }, [toasts])

  return (
    <div
      className={cn(
        'fixed z-50 right-4 flex flex-col gap-4',
        origin === 'top-right' ? 'top-4 flex-col-reverse' : 'bottom-4'
      )}
      aria-live={ariaLive}
    >
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onRemove={() => removeToast(toast.id)}
          reduceMotion={reduceMotion}
        />
      ))}
    </div>
  )
}

// Individual toast item with animation
interface ToastItemProps {
  toast: ToastData,
  onRemove: () => void,
  reduceMotion: boolean,
}

function ToastItem({ toast, onRemove, reduceMotion }: ToastItemProps) {
  const [isEntering, setIsEntering] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  // Entry animation
  useEffect(() => {
    if (reduceMotion) {
      setIsEntering(false)
      return
    }

    const timer = setTimeout(() => {
      setIsEntering(false)
    }, ANIMATION_DURATION)

    return () => clearTimeout(timer)
  }, [reduceMotion])

  // Handle removal with exit animation
  const handleTimeout = useCallback(() => {
    if (reduceMotion) {
      onRemove()
      return
    }

    setIsExiting(true)
    setTimeout(() => {
      onRemove()
    }, ANIMATION_DURATION)
  }, [onRemove, reduceMotion])

  // Handle close button click
  const handleCloseClick = useCallback(() => {
    if (reduceMotion) {
      onRemove()
      return
    }

    setIsExiting(true)
    setTimeout(() => {
      onRemove()
    }, ANIMATION_DURATION)
  }, [onRemove, reduceMotion])

  return (
    <div
      ref={itemRef}
      className={cn(
        'transition-all',
        !reduceMotion && 'duration-250 ease-out',
        isEntering && 'opacity-0 translate-y-2',
        isExiting && 'opacity-0 -translate-y-2',
        !isEntering && !isExiting && 'opacity-100 translate-y-0'
      )}
      style={{
        transitionDuration: reduceMotion ? '0ms' : `${ANIMATION_DURATION}ms`,
      }}
    >
      <Toast
        type={toast.type}
        text={toast.text}
        persistent={toast.persistent}
        onTimeout={handleTimeout}
        action={toast.action}
        close={
          toast.close !== undefined ? (
            <div onClick={handleCloseClick}>{toast.close}</div>
          ) : undefined
        }
      />
    </div>
  )
}

// ============================================================================
// ToastManager (alternative API for declarative usage)
// ============================================================================

export interface ToastManagerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Position of toast container */
  origin?: ToastOrigin,
  /** Toast children (rendered in hidden slot, cloned to visible list) */
  children?: React.ReactNode,
}

/**
 * ToastManager - A declarative wrapper for managing toasts as children
 *
 * This mirrors the web component API where toasts are passed as children.
 * For most React use cases, prefer ToastProvider + useToast.
 *
 * @example
 * ```tsx
 * <ToastManager origin="bottom-right">
 *   {showToast && <Toast type="success" text="Saved!" />}
 * </ToastManager>
 * ```
 */
export const ToastManager = forwardRef<HTMLDivElement, ToastManagerProps>(
  ({ className, origin = 'bottom-right', children, ...props }, ref) => {
    // Track toast children by key/identity
    const [visibleToasts, setVisibleToasts] = useState<React.ReactElement[]>([])

    // Convert children to array and filter for Toast elements
    const toastChildren = useMemo(() => {
      const arr: React.ReactElement[] = []
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
          arr.push(child)
        }
      })
      return arr
    }, [children])

    // Sync toast children
    useEffect(() => {
      setVisibleToasts(toastChildren)
    }, [toastChildren])

    // Determine aria-live based on toast types
    const ariaLive = useMemo(() => {
      const hasUrgent = visibleToasts.some((toastEl) => {
        const toastType = toastEl.props?.type as ToastType | undefined
        return toastType === 'error' || toastType === 'warn'
      })
      return hasUrgent ? 'assertive' : 'polite'
    }, [visibleToasts])

    return (
      <div ref={ref} className={cn('block', className)} {...props}>
        {/* Hidden slot for original children */}
        <div className="w-0 h-0 overflow-hidden invisible">{children}</div>
        {/* Visible toast list */}
        <div
          className={cn(
            'fixed z-50 right-4 flex flex-col',
            origin === 'top-right' ? 'top-4 flex-col-reverse' : 'bottom-0'
          )}
          aria-live={ariaLive}
        >
          {visibleToasts.map((toastEl, index) => (
            <div key={toastEl.key ?? index} className="mb-4">
              {toastEl}
            </div>
          ))}
        </div>
      </div>
    )
  }
)
ToastManager.displayName = 'ToastManager'

// Convenience functions for common toast types
export const toast = {
  success: (text: string, options?: Partial<Omit<ToastData, 'id' | 'type' | 'text'>>) => ({
    type: 'success' as const,
    text,
    ...options,
  }),
  error: (text: string, options?: Partial<Omit<ToastData, 'id' | 'type' | 'text'>>) => ({
    type: 'error' as const,
    text,
    ...options,
  }),
  warn: (text: string, options?: Partial<Omit<ToastData, 'id' | 'type' | 'text'>>) => ({
    type: 'warn' as const,
    text,
    ...options,
  }),
  info: (text: string, options?: Partial<Omit<ToastData, 'id' | 'type' | 'text'>>) => ({
    type: 'info' as const,
    text,
    ...options,
  }),
}
