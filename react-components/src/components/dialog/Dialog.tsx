import { cva, type VariantProps } from 'class-variance-authority'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../utils/cn'
import { useScrollLock } from '../../utils/useScrollLock'
import { Button } from '../button'
import { Icon } from '../icon'
import { Title } from '../title'

/**
 * Close event detail types - indicates how the dialog was closed
 */
export type DialogCloseDetail = 'close' | 'escape' | 'backdrop'

// Dialog container variants
const dialogContainerVariants = cva(
  // Base styles for the dialog panel
  [
    'fixed',
    'left-0',
    'right-0',
    'm-auto',
    'flex',
    'flex-col',
    'border-none',
    'outline-none',
    'box-border',
    'bg-[var(--sinch-comp-dialog-color-default-background-initial,var(--sinch-sys-color-surface-primary-default,white))]',
    'rounded-[var(--sinch-comp-dialog-shape-radius,12px)]',
    'shadow-[var(--sinch-comp-dialog-shadow,var(--sinch-sys-shadow-overlay-md))]',
    'max-h-[var(--sinch-comp-dialog-max-height,85vh)]',
    'min-w-[320px]',
    'z-50',
    // Animation
    'transition-all',
    'duration-200',
    'ease-out',
  ],
  {
    variants: {
      open: {
        true: 'opacity-100 scale-100',
        false: 'opacity-0 scale-95',
      },
      size: {
        sm: 'max-w-[384px] w-full',
        md: 'max-w-[512px] w-full',
        lg: 'max-w-[768px] w-full',
        fullscreen: 'max-w-none w-[calc(100vw-48px)] max-h-[calc(100vh-48px)]',
      },
    },
    defaultVariants: {
      open: false,
      size: 'md',
    },
  }
)

// Backdrop variants
const backdropVariants = cva(
  [
    'fixed',
    'inset-0',
    'z-40',
    'bg-[var(--sinch-comp-dialog-color-backdrop,var(--sinch-sys-color-backdrop))]',
    'backdrop-blur-sm',
    'transition-[opacity,backdrop-filter]',
    'duration-200',
  ],
  {
    variants: {
      visible: {
        true: 'opacity-100',
        false: 'opacity-0 pointer-events-none',
      },
    },
    defaultVariants: {
      visible: false,
    },
  }
)

export type DialogSize = 'sm' | 'md' | 'lg' | 'fullscreen'

export interface DialogProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    Omit<VariantProps<typeof dialogContainerVariants>, 'size'> {
  /**
   * Whether the dialog is open
   * @default false
   */
  open?: boolean,
  /**
   * Dialog size variant
   * @default 'md'
   */
  size?: DialogSize,
  /**
   * Dialog title/caption
   */
  caption?: string,
  /**
   * Callback when the dialog requests to be closed
   * @param detail - The reason for closing ('close', 'escape', or 'backdrop')
   */
  onClose?: (detail: DialogCloseDetail) => void,
  /**
   * Callback when the open state should change.
   * Fires with `false` for all close actions (escape, backdrop, close button).
   * Useful for controlled state: `onOpenChange={(open) => setOpen(open)}`
   */
  onOpenChange?: (open: boolean) => void,
  /**
   * Aria label for the close button
   * @default 'Close'
   */
  closeAriaLabel?: string,
  /**
   * Icon to display in the header
   */
  icon?: React.ReactNode,
  /**
   * Footer/buttons content
   */
  buttons?: React.ReactNode,
  /**
   * Content to display in the dialog body
   */
  children?: React.ReactNode,
  /**
   * Container element for the portal
   * @default document.body
   */
  container?: HTMLElement,
  /**
   * Hide the close button
   * @default false
   */
  hideCloseButton?: boolean,
  /**
   * Callback when the open/close transition starts
   */
  onDialogTransitionStart?: (action: 'open' | 'close') => void,
  /**
   * Callback when the open/close transition ends
   */
  onDialogTransitionEnd?: (action: 'open' | 'close') => void,
}

/**
 * Dialog component - A modal dialog with backdrop, focus trapping, and escape key support.
 *
 * Features:
 * - Portal rendering to document.body
 * - Focus trapping within the dialog
 * - Escape key to close
 * - Click outside (backdrop) to close
 * - Scroll locking when open
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false)
 *
 * <Dialog
 *   open={open}
 *   onClose={() => setOpen(false)}
 *   caption="Confirm Action"
 *   buttons={
 *     <>
 *       <Button onClick={() => setOpen(false)}>Cancel</Button>
 *       <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
 *     </>
 *   }
 * >
 *   Are you sure you want to proceed?
 * </Dialog>
 * ```
 */
export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      className,
      children,
      open = false,
      size = 'md',
      caption,
      onClose,
      onOpenChange,
      closeAriaLabel = 'Close',
      icon,
      buttons,
      container,
      hideCloseButton = false,
      onDialogTransitionStart,
      onDialogTransitionEnd,
      style,
      id,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const previousActiveElement = useRef<HTMLElement | null>(null)

    // Expose the dialog ref through the forwarded ref
    useImperativeHandle(ref, () => dialogRef.current as HTMLDivElement)

    // Lock body scroll while dialog is visible
    useScrollLock(isVisible)

    // Handle visibility state for animation
    useEffect(() => {
      if (open) {
        // Store the currently focused element
        previousActiveElement.current = document.activeElement as HTMLElement

        // Show the dialog
        setIsVisible(true)

        // Start open animation on next frame
        requestAnimationFrame(() => {
          setIsAnimating(true)
          onDialogTransitionStart?.('open')
        })
      } else if (isVisible) {
        // Start close animation
        setIsAnimating(false)
        onDialogTransitionStart?.('close')
      }
    }, [open, isVisible, onDialogTransitionStart])

    // Handle escape key
    useEffect(() => {
      if (!open) return

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault()
          e.stopPropagation()
          onClose?.('escape')
          onOpenChange?.(false)
        }
      }

      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }, [open, onClose, onOpenChange])

    // Handle animation end - clean up after closing
    const handleTransitionEnd = useCallback(
      (e: React.TransitionEvent<HTMLDivElement>) => {
        if (e.propertyName !== 'opacity') return

        if (isAnimating) {
          onDialogTransitionEnd?.('open')
        } else {
          onDialogTransitionEnd?.('close')
          setIsVisible(false)

          // Restore focus to previous element
          previousActiveElement.current?.focus()
        }
      },
      [isAnimating, onDialogTransitionEnd]
    )

    // Handle backdrop click
    const handleBackdropClick = useCallback(
      (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
          onClose?.('backdrop')
          onOpenChange?.(false)
        }
      },
      [onClose, onOpenChange]
    )

    // Handle close button click
    const handleCloseClick = useCallback(() => {
      onClose?.('close')
      onOpenChange?.(false)
    }, [onClose, onOpenChange])

    // Focus trap for modal
    useEffect(() => {
      if (!open || !dialogRef.current) return

      const dialog = dialogRef.current

      // Get focusable elements, excluding those inside nested dialogs
      const getFocusableElements = () => {
        const all = dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        return Array.from(all).filter(
          (el) => !el.closest('[role="dialog"]') || el.closest('[role="dialog"]') === dialog
        )
      }

      const focusableElements = getFocusableElements()
      const firstFocusable = focusableElements[0]

      // Focus first focusable element
      firstFocusable?.focus()

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return

        // Re-query to handle dynamic content
        const currentFocusable = getFocusableElements()
        if (currentFocusable.length === 0) return

        const first = currentFocusable[0]
        const last = currentFocusable[currentFocusable.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last?.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first?.focus()
          }
        }
      }

      document.addEventListener('keydown', handleTabKey)
      return () => document.removeEventListener('keydown', handleTabKey)
    }, [open])

    // Don't render if not visible and not open
    if (!isVisible && !open) return null

    const dialogContent = (
      <>
        {/* Backdrop */}
        <div
          className={cn(backdropVariants({ visible: isAnimating }))}
          onClick={handleBackdropClick}
          aria-hidden="true"
          data-testid="dialog-backdrop"
        />

        {/* Dialog centering container */}
        <div
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        >
          {/* Dialog panel */}
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel ?? caption}
            aria-labelledby={caption ? 'dialog-caption' : undefined}
            aria-describedby="dialog-content"
            id={id}
            style={style}
            className={cn(
              dialogContainerVariants({ open: isAnimating, size }),
              'pointer-events-auto',
              className
            )}
            onTransitionEnd={handleTransitionEnd}
            {...props}
          >
            {/* Header */}
            <div
              className={cn(
                'flex flex-row items-start gap-2 px-6 pt-6 pb-4',
                (children || buttons) && 'border-b border-[var(--sinch-sys-color-border-default,#e5e7eb)]',
                '[--sinch-global-size-icon:24px]',
                '[--sinch-global-color-icon:var(--sinch-comp-dialog-color-default-icon-initial)]'
              )}
            >
              {/* Icon slot */}
              {icon && <span className="shrink-0 mt-0.5">{icon}</span>}

              {/* Caption */}
              {caption && (
                <Title
                  type="m"
                  level="3"
                  id="dialog-caption"
                  className={cn(
                    '[color:var(--sinch-comp-dialog-color-default-title-initial)]',
                    '[font:var(--sinch-comp-dialog-font-title)]'
                  )}
                >
                  {caption}
                </Title>
              )}

              {/* Close button */}
              {!hideCloseButton && (
                <Button
                  size="s"
                  aria-label={closeAriaLabel}
                  onClick={handleCloseClick}
                  className="ml-auto shrink-0"
                  icon={<Icon name="fa-xmark" iconsVersion="2" size="sm" />}
                />
              )}
            </div>

            {/* Content */}
            <div
              id="dialog-content"
              className="min-h-0 overflow-auto px-6 py-5"
            >
              {children}
            </div>

            {/* Buttons/Actions */}
            {buttons && (
              <div className="flex flex-row justify-end gap-3 px-6 pt-4 pb-6 border-t border-[var(--sinch-sys-color-border-default,#e5e7eb)]">
                {buttons}
              </div>
            )}
          </div>
        </div>
      </>
    )

    return createPortal(dialogContent, container ?? document.body)
  }
)
Dialog.displayName = 'Dialog'
