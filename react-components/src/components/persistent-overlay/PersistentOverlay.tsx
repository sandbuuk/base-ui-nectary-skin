import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { useScrollLock } from '../../utils/useScrollLock'

/**
 * PersistentOverlay is a dialog that cannot be closed via normal means (ESC, backdrop click, close button).
 * It monitors for external visibility manipulation and emits an event when detected.
 * Useful for blocking UIs during critical operations.
 */

const overlayVariants = cva(
  [
    'fixed inset-0 z-50 flex items-center justify-center',
    'bg-black/55',
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

const dialogVariants = cva(
  [
    'flex flex-col',
    'py-6',
    'max-w-[512px] max-h-[90vh]',
    'w-fit',
    'rounded-[var(--sinch-comp-dialog-shape-radius,8px)]',
    'bg-[var(--sinch-comp-dialog-color-default-background-initial,var(--sinch-sys-color-surface-primary-default))]',
    'shadow-[var(--sinch-comp-dialog-shadow,var(--sinch-sys-shadow-overlay-sm))]',
    'outline-none',
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface PersistentOverlayProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>,
    VariantProps<typeof dialogVariants> {
  /** Whether the overlay is open */
  open?: boolean
  /** Dialog caption/title */
  caption?: string
  /** Callback when visibility is altered externally */
  onVisibilityAltered?: () => void
  /** Icon to display in the header */
  icon?: React.ReactNode
  /** Content to display in the dialog body */
  content?: React.ReactNode
  /** Buttons/actions to display at the bottom */
  buttons?: React.ReactNode
  /** Accessible label for the dialog */
  'aria-label'?: string
  /** Interval for checking visibility manipulation (ms) */
  checkInterval?: number
}

export const PersistentOverlay = forwardRef<HTMLDivElement, PersistentOverlayProps>(
  (
    {
      className,
      open = false,
      caption,
      onVisibilityAltered,
      icon,
      content,
      buttons,
      'aria-label': ariaLabel,
      checkInterval = 1000,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(open)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    // Handle open state changes
    useEffect(() => {
      setIsVisible(open)
    }, [open])

    // Monitor for external visibility manipulation
    const checkVisibility = useCallback(() => {
      if (dialogRef.current === null) {
        return
      }

      const dialog = dialogRef.current
      const computedStyle = getComputedStyle(dialog)

      // Check if dialog is still visible
      const isDialogVisible =
        computedStyle.visibility === 'visible' &&
        computedStyle.display !== 'none' &&
        dialog.open === true

      if (!isDialogVisible && isVisible) {
        onVisibilityAltered?.()
      }
    }, [isVisible, onVisibilityAltered])

    // Start monitoring when open
    useEffect(() => {
      if (!open) {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
        return
      }

      // Wait for next frame before starting to monitor
      requestAnimationFrame(() => {
        intervalRef.current = setInterval(checkVisibility, checkInterval)
      })

      return () => {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      }
    }, [open, checkInterval, checkVisibility])

    // Cleanup on unmount
    useEffect(() => {
      return () => {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current)
        }
        // Emit visibility altered if open when unmounting
        if (open) {
          onVisibilityAltered?.()
        }
      }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // Prevent escape key from closing
    useEffect(() => {
      if (!open) {
        return
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault()
          e.stopPropagation()
        }
      }

      document.addEventListener('keydown', handleKeyDown, { capture: true })

      return () => {
        document.removeEventListener('keydown', handleKeyDown, { capture: true })
      }
    }, [open])

    // Prevent scroll when open
    useScrollLock(open)

    if (!open) {
      return null
    }

    const overlayContent = (
      <div
        ref={ref}
        className={cn(overlayVariants())}
        role="presentation"
        {...props}
      >
        <dialog
          ref={dialogRef}
          className={cn(dialogVariants(), className)}
          open
          aria-modal="true"
          aria-label={ariaLabel}
        >
          {/* Header */}
          <div className="flex items-start gap-2 px-6 mb-3">
            {icon !== undefined && (
              <div className="flex-shrink-0 text-[var(--sinch-comp-dialog-color-default-icon-initial,var(--sinch-sys-color-text-default))]">
                {icon}
              </div>
            )}
            {caption !== undefined && (
              <h3 className="text-[var(--sinch-comp-dialog-color-default-title-initial,var(--sinch-sys-color-text-default))] font-semibold text-lg">
                {caption}
              </h3>
            )}
            {/* No close button - this is a persistent overlay */}
          </div>

          {/* Content */}
          {content !== undefined && (
            <div className="min-h-0 overflow-auto px-6 py-1">
              {content}
            </div>
          )}

          {/* Buttons */}
          {buttons !== undefined && (
            <div className="flex justify-end gap-4 px-6 mt-5">
              {buttons}
            </div>
          )}
        </dialog>
      </div>
    )

    return createPortal(overlayContent, document.body)
  }
)
PersistentOverlay.displayName = 'PersistentOverlay'
