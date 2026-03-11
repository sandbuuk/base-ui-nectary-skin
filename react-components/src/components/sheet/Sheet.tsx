import { type VariantProps, cva } from 'class-variance-authority'
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
 * Sheet placement options
 */
export type SheetPlacement = 'left' | 'right' | 'top' | 'bottom'

/**
 * Sheet overlay mode
 * - 'modal': Shows backdrop and traps focus
 * - 'push': No backdrop, content appears alongside page content
 */
export type SheetOverlayMode = 'modal' | 'push'

/**
 * Close event detail types
 */
export type SheetCloseDetail = 'close' | 'escape' | 'backdrop'

/**
 * Animation event detail
 */
export interface SheetAnimationDetail {
  action: 'expand' | 'collapse',
  width: number,
  height: number,
  duration: string,
  easing: string,
}

// Sheet dialog variants based on placement
const sheetDialogVariants = cva(
  // Base styles
  [
    'fixed',
    'm-0',
    'grid',
    'grid-rows-[auto_1fr_auto]',
    'p-[var(--sinch-comp-sheet-size-padding,24px)]',
    'gap-[var(--sinch-comp-sheet-size-gap,16px)]',
    'box-border',
    'bg-[var(--sinch-comp-sheet-color-background,var(--sinch-sys-color-surface-primary-default,white))]',
    'border-none',
    'outline-none',
    'transition-[transform,opacity]',
    'duration-[var(--sinch-comp-sheet-animation-duration,300ms)]',
    'ease-[var(--sinch-comp-sheet-animation-easing,cubic-bezier(0.25,1,0.5,1))]',
    'motion-reduce:duration-[0.01ms]',
  ],
  {
    variants: {
      placement: {
        right: [
          'top-0',
          'right-0',
          'ml-auto',
          'h-dvh',
          'max-w-[var(--sinch-comp-sheet-size-max-horizontal,480px)]',
          'max-sm:max-w-[100dvw]',
        ],
        left: [
          'top-0',
          'left-0',
          'mr-auto',
          'h-dvh',
          'max-w-[var(--sinch-comp-sheet-size-max-horizontal,480px)]',
          'max-sm:max-w-[100dvw]',
        ],
        top: [
          'top-0',
          'left-0',
          'right-0',
          'w-full',
          'max-h-[var(--sinch-comp-sheet-size-max-vertical,480px)]',
        ],
        bottom: [
          'bottom-0',
          'left-0',
          'right-0',
          'w-full',
          'mt-auto',
          'max-h-[var(--sinch-comp-sheet-size-max-vertical,480px)]',
        ],
      },
      overlay: {
        modal: 'opacity-0',
        push: 'opacity-[var(--sinch-sys-opacity-disabled,0.5)]',
      },
      open: {
        true: 'translate-x-0 translate-y-0 opacity-100',
        false: '',
      },
    },
    compoundVariants: [
      // Closed state transforms based on placement
      { placement: 'right', open: false, className: 'translate-x-full' },
      { placement: 'left', open: false, className: '-translate-x-full' },
      { placement: 'top', open: false, className: '-translate-y-full' },
      { placement: 'bottom', open: false, className: 'translate-y-full' },
    ],
    defaultVariants: {
      placement: 'right',
      overlay: 'modal',
      open: false,
    },
  }
)

// Backdrop styles
const backdropVariants = cva(
  [
    'fixed',
    'inset-0',
    'z-40',
    'bg-gradient-to-b',
    'from-[var(--sinch-comp-sheet-color-backdrop-from,var(--sinch-sys-color-backdrop))]',
    'to-[var(--sinch-comp-sheet-color-backdrop-to,var(--sinch-sys-color-backdrop))]',
    'backdrop-blur-[var(--sinch-comp-sheet-size-backdrop-blur,0)]',
    'transition-opacity',
    'duration-[var(--sinch-comp-sheet-animation-duration,300ms)]',
    'ease-[var(--sinch-comp-sheet-animation-easing,cubic-bezier(0.25,1,0.5,1))]',
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

export interface SheetProps extends VariantProps<typeof sheetDialogVariants> {
  /**
   * Whether the sheet is open
   * @default false
   */
  open?: boolean,
  /**
   * Sheet placement/position
   * @default 'right'
   */
  placement?: SheetPlacement,
  /**
   * Overlay mode - modal (with backdrop) or push (no backdrop)
   * @default 'modal'
   */
  overlay?: SheetOverlayMode,
  /**
   * Callback when the sheet requests to be closed
   */
  onClose?: (detail: SheetCloseDetail) => void,
  /**
   * Callback when the open state should change.
   * Fires with `false` for all close actions.
   */
  onOpenChange?: (open: boolean) => void,
  /**
   * Callback when sheet slide animation starts
   */
  onSheetAnimationStart?: (detail: SheetAnimationDetail) => void,
  /**
   * Callback when sheet slide animation ends
   */
  onSheetAnimationEnd?: (detail: SheetAnimationDetail) => void,
  /**
   * Title content for the sheet header
   */
  title?: React.ReactNode,
  /**
   * Footer content for the sheet
   */
  footer?: React.ReactNode,
  /**
   * Container element for the portal (defaults to document.body)
   */
  container?: HTMLElement,
  /**
   * Additional className for the sheet
   */
  className?: string,
  /**
   * Children content
   */
  children?: React.ReactNode,
  /**
   * ID for the sheet element
   */
  id?: string,
  /**
   * Custom styles
   */
  style?: React.CSSProperties,
  /**
   * Additional data attributes
   */
  'data-testid'?: string,
  /**
   * Accessible label for the sheet (alternative to title)
   */
  'aria-label'?: string,
  /**
   * ID of an element that labels the sheet (alternative to title)
   */
  'aria-labelledby'?: string,
}

/**
 * Sheet component - A slide-in panel/drawer that appears from the edge of the screen.
 *
 * Supports four placement options (left, right, top, bottom) and two overlay modes:
 * - modal: Shows backdrop, traps focus, and prevents body scroll
 * - push: No backdrop, content slides alongside existing content
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false)
 *
 * <Sheet
 *   open={open}
 *   onClose={() => setOpen(false)}
 *   title={<SheetTitle title="Settings" onClose={() => setOpen(false)} />}
 *   footer={<Button onClick={() => setOpen(false)}>Close</Button>}
 * >
 *   <p>Sheet content here</p>
 * </Sheet>
 * ```
 */
export const Sheet = forwardRef<HTMLDivElement, SheetProps>(
  (
    {
      className,
      children,
      open = false,
      placement = 'right',
      overlay = 'modal',
      onClose,
      onOpenChange,
      onSheetAnimationStart,
      onSheetAnimationEnd,
      title,
      footer,
      container,
      id,
      style,
      'data-testid': dataTestId,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const previousActiveElement = useRef<HTMLElement | null>(null)

    // Expose the dialog ref through the forwarded ref
    useImperativeHandle(ref, () => dialogRef.current as HTMLDivElement)

    // Dev-only: warn if Sheet lacks an accessible label
    useEffect(() => {
      if (process.env.NODE_ENV !== 'production' && open && !title) {
        const el = dialogRef.current
        if (
          el &&
          !el.getAttribute('aria-label') &&
          !el.getAttribute('aria-labelledby')
        ) {
          console.warn(
            'Sheet: Missing accessible label. Provide a `title` prop, or pass `aria-label` / `aria-labelledby` for screen readers.'
          )
        }
      }
    }, [open, title])

    // Lock body scroll for modal overlay while visible
    useScrollLock(isVisible && overlay === 'modal')

    // Handle visibility state for animation
    useEffect(() => {
      if (open) {
        // Store the currently focused element
        previousActiveElement.current = document.activeElement as HTMLElement

        // Show the dialog (opacity 0 initially)
        setIsVisible(true)

        // Start open animation on next frame
        requestAnimationFrame(() => {
          setIsAnimating(true)
        })
      } else if (isVisible) {
        // Start close animation
        setIsAnimating(false)
      }
    }, [open, overlay, isVisible])

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

    // Helper to create animation detail
    const createAnimationDetail = useCallback((): SheetAnimationDetail => ({
      action: isAnimating ? 'expand' : 'collapse',
      width: dialogRef.current?.offsetWidth ?? 0,
      height: dialogRef.current?.offsetHeight ?? 0,
      duration: dialogRef.current
        ? getComputedStyle(dialogRef.current).getPropertyValue('--sinch-comp-sheet-animation-duration') || '300ms'
        : '300ms',
      easing: dialogRef.current
        ? getComputedStyle(dialogRef.current).getPropertyValue('--sinch-comp-sheet-animation-easing') || 'cubic-bezier(0.25, 1, 0.5, 1)'
        : 'cubic-bezier(0.25, 1, 0.5, 1)',
    }), [isAnimating])

    // Handle transitionstart via native event (not supported by React's synthetic events)
    useEffect(() => {
      const dialog = dialogRef.current
      if (!dialog || !onSheetAnimationStart) return

      const handleTransitionStart = (e: TransitionEvent) => {
        if (e.propertyName !== 'transform') return
        onSheetAnimationStart(createAnimationDetail())
      }

      dialog.addEventListener('transitionstart', handleTransitionStart)
      return () => dialog.removeEventListener('transitionstart', handleTransitionStart)
    }, [onSheetAnimationStart, createAnimationDetail])

    // Handle transitionend
    const handleTransitionEnd = useCallback(
      (e: React.TransitionEvent<HTMLDivElement>) => {
        if (e.propertyName !== 'transform') return

        onSheetAnimationEnd?.(createAnimationDetail())

        // If we just finished closing, hide the dialog
        if (!isAnimating) {
          setIsVisible(false)

          // Restore focus to previous element
          previousActiveElement.current?.focus()
        }
      },
      [isAnimating, onSheetAnimationEnd, createAnimationDetail]
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

    // Focus trap for modal overlay
    useEffect(() => {
      if (!open || overlay !== 'modal' || !dialogRef.current) return

      const dialog = dialogRef.current
      const focusableElements = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstFocusable = focusableElements[0]
      const lastFocusable = focusableElements[focusableElements.length - 1]

      // Focus first focusable element
      firstFocusable?.focus()

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault()
            lastFocusable?.focus()
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault()
            firstFocusable?.focus()
          }
        }
      }

      document.addEventListener('keydown', handleTabKey)
      return () => document.removeEventListener('keydown', handleTabKey)
    }, [open, overlay])

    // Don't render if not visible and not open
    if (!isVisible && !open) return null

    const sheetContent = (
      <>
        {/* Backdrop (only for modal overlay) */}
        {overlay === 'modal' && (
          <div
            className={cn(backdropVariants({ visible: isAnimating }))}
            onClick={handleBackdropClick}
            aria-hidden="true"
          />
        )}

        {/* Sheet dialog */}
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal={overlay === 'modal'}
          aria-label={!title ? ariaLabel : undefined}
          aria-labelledby={title ? 'sheet-title' : ariaLabelledBy}
          aria-describedby="sheet-content"
          id={id}
          style={style}
          data-testid={dataTestId}
          className={cn(
            'z-50',
            sheetDialogVariants({
              placement,
              overlay,
              open: isAnimating,
            }),
            className
          )}
          onTransitionEnd={handleTransitionEnd}
        >
          {/* Title slot */}
          {title && (
            <div
              id="sheet-title"
              className={cn(
                (children || footer) && 'border-b border-[var(--sinch-sys-color-border-default,#e5e7eb)]'
              )}
            >
              {title}
            </div>
          )}

          {/* Content slot */}
          <div
            id="sheet-content"
            className="min-h-0 flex-1 overflow-auto overscroll-contain"
          >
            {children}
          </div>

          {/* Footer slot */}
          {footer && (
            <div className="flex flex-row justify-end gap-4 border-t border-[var(--sinch-sys-color-border-default,#e5e7eb)] pt-4 px-4 pb-4">
              {footer}
            </div>
          )}
        </div>
      </>
    )

    return createPortal(sheetContent, container ?? document.body)
  }
)
Sheet.displayName = 'Sheet'

// ============================================================================
// SheetTitle Component
// ============================================================================

const sheetTitleVariants = cva(
  // Base styles
  ['contents']
)

export interface SheetTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The title text
   */
  title: string,
  /**
   * Optional description text
   */
  description?: string,
  /**
   * Callback when close button is clicked
   */
  onClose?: () => void,
  /**
   * Aria label for the close button
   * @default 'Close'
   */
  closeAriaLabel?: string,
  /**
   * Icon to display before the title
   */
  icon?: React.ReactNode,
  /**
   * Hide the close button
   * @default false
   */
  hideCloseButton?: boolean,
}

/**
 * SheetTitle component for the Sheet header.
 *
 * Displays a title, optional description, optional icon, and close button.
 *
 * @example
 * ```tsx
 * <SheetTitle
 *   title="Settings"
 *   description="Configure your preferences"
 *   onClose={() => setOpen(false)}
 * />
 * ```
 */
export const SheetTitle = forwardRef<HTMLDivElement, SheetTitleProps>(
  (
    {
      className,
      title,
      description,
      onClose,
      closeAriaLabel = 'Close',
      icon,
      hideCloseButton = false,
      ...props
    },
    ref
  ) => {
    const handleCloseClick = useCallback(() => {
      onClose?.()
    }, [onClose])

    return (
      <div ref={ref} className={cn(sheetTitleVariants(), className)} {...props}>
        <div className="flex flex-row items-center gap-2 mt-2">
          {/* Icon slot */}
          {icon && <span className="shrink-0">{icon}</span>}

          {/* Title */}
          <Title
            type="m"
            level="3"
            className="text-[var(--sinch-comp-sheet-color-title)] [font:var(--sinch-comp-sheet-font-title)]"
          >
            {title}
          </Title>

          {/* Close button */}
          {!hideCloseButton && (
            <Button
              size="s"
              aria-label={closeAriaLabel}
              onClick={handleCloseClick}
              className="ml-auto"
              icon={<Icon name="fa-xmark" iconsVersion="2" size="sm" />}
            />
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-[var(--sinch-comp-sheet-color-description)] [font:var(--sinch-comp-sheet-font-description)] m-0">
            {description}
          </p>
        )}
      </div>
    )
  }
)
SheetTitle.displayName = 'SheetTitle'
