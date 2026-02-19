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
    'py-6',
    'border-none',
    'outline-none',
    'box-border',
    'bg-[var(--sinch-comp-dialog-color-default-background-initial,white)]',
    'rounded-[var(--sinch-comp-dialog-shape-radius,8px)]',
    'shadow-[var(--sinch-comp-dialog-shadow,0_8px_32px_rgba(0,0,0,0.2))]',
    'max-w-[var(--sinch-comp-dialog-max-width,512px)]',
    'max-h-[var(--sinch-comp-dialog-max-height,90vh)]',
    'w-[var(--sinch-comp-dialog-width,fit-content)]',
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
    },
    defaultVariants: {
      open: false,
    },
  }
)

// Backdrop variants
const backdropVariants = cva(
  [
    'fixed',
    'inset-0',
    'z-40',
    'bg-black/55',
    'transition-opacity',
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

export interface DialogProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof dialogContainerVariants> {
  /**
   * Whether the dialog is open
   * @default false
   */
  open?: boolean,
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
      caption,
      onClose,
      closeAriaLabel = 'Close',
      icon,
      buttons,
      container,
      hideCloseButton = false,
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
        })

        // Lock body scroll
        document.body.style.overflow = 'hidden'
      } else if (isVisible) {
        // Start close animation
        setIsAnimating(false)
      }
    }, [open, isVisible])

    // Handle escape key
    useEffect(() => {
      if (!open) return

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault()
          e.stopPropagation()
          onClose?.('escape')
        }
      }

      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }, [open, onClose])

    // Handle animation end - clean up after closing
    const handleTransitionEnd = useCallback(
      (e: React.TransitionEvent<HTMLDivElement>) => {
        if (e.propertyName !== 'opacity') return

        // If we just finished closing, hide the dialog
        if (!isAnimating) {
          setIsVisible(false)

          // Restore body scroll
          document.body.style.overflow = ''

          // Restore focus to previous element
          previousActiveElement.current?.focus()
        }
      },
      [isAnimating]
    )

    // Handle backdrop click
    const handleBackdropClick = useCallback(
      (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
          onClose?.('backdrop')
        }
      },
      [onClose]
    )

    // Handle close button click
    const handleCloseClick = useCallback(() => {
      onClose?.('close')
    }, [onClose])

    // Focus trap for modal
    useEffect(() => {
      if (!open || !dialogRef.current) return

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
              dialogContainerVariants({ open: isAnimating }),
              'pointer-events-auto',
              className
            )}
            onTransitionEnd={handleTransitionEnd}
            {...props}
          >
            {/* Header */}
            <div
              className={cn(
                'flex flex-row items-start gap-2 mb-3 px-6',
                '[--sinch-global-size-icon:24px]',
                '[--sinch-global-color-icon:var(--sinch-comp-dialog-color-default-icon-initial)]'
              )}
            >
              {/* Icon slot */}
              {icon && <span className="shrink-0">{icon}</span>}

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
                  className="relative left-1 -top-1 ml-auto"
                  icon={<Icon name="fa-xmark" iconsVersion="2" size="sm" />}
                />
              )}
            </div>

            {/* Content */}
            <div
              id="dialog-content"
              className="min-h-0 overflow-auto px-6 py-1"
            >
              {children}
            </div>

            {/* Buttons/Actions */}
            {buttons && (
              <div className="flex flex-row justify-end gap-4 mt-5 px-6">
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
