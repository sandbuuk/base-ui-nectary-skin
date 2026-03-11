import { type VariantProps, cva } from 'class-variance-authority'
import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../utils/cn'
import { useScrollLock } from '../../utils/useScrollLock'

/**
 * Popover component that displays floating content anchored to a trigger element.
 * Supports multiple orientations, optional tip arrow, and modal/non-modal modes.
 */

const TIP_SIZE = 16

// Content wrapper variants for padding based on orientation and tip
const contentWrapperVariants = cva(
  'relative w-fit min-w-full',
  {
    variants: {
      orientation: {
        'top': 'pb-1',
        'bottom': 'pt-1',
        'left': 'pr-1',
        'right': 'pl-1',
        'top-left': 'pb-1',
        'top-right': 'pb-1',
        'bottom-left': 'pt-1',
        'bottom-right': 'pt-1',
      },
      tip: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // With tip, increase padding
      { orientation: 'top', tip: true, className: 'pb-3' },
      { orientation: 'bottom', tip: true, className: 'pt-3' },
      { orientation: 'left', tip: true, className: 'pr-3' },
      { orientation: 'right', tip: true, className: 'pl-3' },
      { orientation: 'top-left', tip: true, className: 'pb-3' },
      { orientation: 'top-right', tip: true, className: 'pb-3' },
      { orientation: 'bottom-left', tip: true, className: 'pt-3' },
      { orientation: 'bottom-right', tip: true, className: 'pt-3' },
    ],
    defaultVariants: {
      orientation: 'bottom-left',
      tip: false,
    },
  }
)

// Content panel styles
const contentVariants = cva(
  [
    'bg-[var(--sinch-comp-popover-color-default-background-initial,var(--sinch-sys-color-surface-primary-default))]',
    'border',
    'border-[var(--sinch-comp-popover-color-default-border-initial,var(--sinch-sys-color-border-default))]',
    'rounded-[var(--sinch-comp-popover-shape-radius,8px)]',
    'shadow-[var(--sinch-comp-popover-shadow,var(--sinch-sys-shadow-overlay-sm))]',
    'overflow-hidden',
  ],
  {
    variants: {
      tip: {
        true: 'shadow-none',
        false: '',
      },
    },
    defaultVariants: {
      tip: false,
    },
  }
)

// Tip arrow variants based on orientation
const tipVariants = cva(
  [
    'absolute',
    'w-4',
    'h-[9px]',
    'fill-[var(--sinch-comp-popover-color-default-background-initial,var(--sinch-sys-color-surface-primary-default))]',
    'stroke-[var(--sinch-comp-popover-color-default-border-initial,var(--sinch-sys-color-border-default))]',
    '[stroke-linecap:square]',
    'pointer-events-none',
  ],
  {
    variants: {
      orientation: {
        'bottom': 'top-3 left-1/2 -translate-x-1/2 rotate-180',
        'bottom-left': 'top-3 left-1/2 -translate-x-1/2 rotate-180',
        'bottom-right': 'top-3 left-1/2 -translate-x-1/2 rotate-180',
        'top': 'bottom-3 left-1/2 -translate-x-1/2',
        'top-left': 'bottom-3 left-1/2 -translate-x-1/2',
        'top-right': 'bottom-3 left-1/2 -translate-x-1/2',
        'left': 'right-3 top-1/2 -translate-y-1/2 -rotate-90',
        'right': 'left-3 top-1/2 -translate-y-1/2 rotate-90',
      },
      hidden: {
        true: 'hidden',
        false: 'block',
      },
    },
    defaultVariants: {
      orientation: 'bottom-left',
      hidden: true,
    },
  }
)

// Backdrop for modal mode
const backdropVariants = cva(
  'fixed inset-0 z-50',
  {
    variants: {
      modal: {
        true: 'bg-black/20',
        false: 'bg-transparent',
      },
    },
    defaultVariants: {
      modal: false,
    },
  }
)

export type PopoverOrientation =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

export interface PopoverProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>,
  VariantProps<typeof contentVariants> {
  /** Whether the popover is open */
  open?: boolean,
  /** Orientation/position of the popover relative to the target */
  orientation?: PopoverOrientation,
  /** Whether to show the tip arrow pointing to the trigger */
  tip?: boolean,
  /** Modal mode - shows backdrop and traps focus */
  modal?: boolean,
  /** Allow page scrolling when popover is open (only in non-modal mode) */
  allowScroll?: boolean,
  /** Callback when the popover requests to close */
  onClose?: () => void,
  /** Callback when the open state should change */
  onOpenChange?: (open: boolean) => void,
  /** The trigger element */
  children: React.ReactNode,
  /** The popover content */
  content: React.ReactNode,
  /** Accessible label for the popover */
  'aria-label'?: string,
}

interface Position {
  x: number,
  y: number,
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      className,
      children,
      content,
      open = false,
      orientation = 'bottom-left',
      tip = false,
      modal = false,
      allowScroll = false,
      onClose,
      onOpenChange,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
    const [tipPosition, setTipPosition] = useState<{ left?: string, top?: string }>({})
    const [tipHidden, setTipHidden] = useState(false)
    const [contentMaxWidth, setContentMaxWidth] = useState<number | undefined>(undefined)
    
    const triggerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const popoverId = useId()
    const contentId = `popover-content-${popoverId}`

    // Calculate popover position
    const updatePosition = useCallback(() => {
      if (triggerRef.current === null || contentRef.current === null) {
        return
      }

      const triggerRect = triggerRef.current.getBoundingClientRect()
      const contentRect = contentRef.current.getBoundingClientRect()
      const inset = 4 // Safety margin from viewport edges

      let x = 0
      let y = 0

      // Calculate X position based on orientation
      if (orientation === 'bottom-right' || orientation === 'top-right' || orientation === 'bottom' || orientation === 'top') {
        x = triggerRect.x
      } else if (orientation === 'bottom-left' || orientation === 'top-left') {
        x = triggerRect.x + triggerRect.width - contentRect.width
      } else if (orientation === 'right') {
        x = triggerRect.x + triggerRect.width
      } else if (orientation === 'left') {
        x = triggerRect.x - contentRect.width
      }

      // Calculate Y position based on orientation
      if (orientation.startsWith('bottom')) {
        y = triggerRect.y + triggerRect.height
      } else if (orientation.startsWith('top')) {
        y = triggerRect.y - contentRect.height
      } else if (orientation === 'left' || orientation === 'right') {
        y = triggerRect.y + triggerRect.height / 2 - contentRect.height / 2
      }

      // Clamp to viewport
      const clampedX = Math.max(inset, Math.min(x, window.innerWidth - contentRect.width - inset))
      const clampedY = Math.max(inset, Math.min(y, window.innerHeight - contentRect.height - inset))

      setPosition({ x: clampedX, y: clampedY })

      // Update content max width to prevent overflow
      const availableSpace = window.innerWidth - clampedX - 16
      setContentMaxWidth(availableSpace)

      // Update tip position
      if (tip) {
        updateTipPosition(triggerRect, contentRect, clampedX, clampedY)
      }
    }, [orientation, tip])

    // Calculate tip position to point at the trigger
    const updateTipPosition = (
      triggerRect: DOMRect,
      contentRect: DOMRect,
      popoverX: number,
      popoverY: number
    ) => {
      const newTipPosition: { left?: string, top?: string } = {}

      if (orientation.startsWith('top') || orientation.startsWith('bottom')) {
        const diffX = triggerRect.x - popoverX
        let desiredX = diffX + triggerRect.width / 2

        // Adjust for corner orientations
        if (orientation === 'bottom-left' || orientation === 'top-left') {
          desiredX = Math.max(desiredX, contentRect.width * 0.75)
        }
        if (orientation === 'bottom-right' || orientation === 'top-right') {
          desiredX = Math.min(desiredX, contentRect.width * 0.25)
        }

        const xPos = Math.max(TIP_SIZE, Math.min(desiredX, contentRect.width - TIP_SIZE))
        newTipPosition.left = `${xPos}px`
      } else if (orientation === 'left' || orientation === 'right') {
        const diffY = triggerRect.y - popoverY
        const desiredY = diffY + triggerRect.height / 2
        const yPos = Math.max(TIP_SIZE, Math.min(desiredY, contentRect.height - TIP_SIZE))
        newTipPosition.top = `${yPos}px`
      }

      setTipPosition(newTipPosition)

      // Check if tip should be hidden (when rects overlap)
      const overlap = !(
        triggerRect.right < contentRect.left ||
        triggerRect.left > contentRect.right ||
        triggerRect.bottom < contentRect.top ||
        triggerRect.top > contentRect.bottom
      )
      setTipHidden(overlap)
    }

    // Update position on open and when dependencies change
    useLayoutEffect(() => {
      if (open) {
        updatePosition()
      }
    }, [open, updatePosition])

    // Handle resize and scroll
    useEffect(() => {
      if (!open) {
        return
      }

      const handleResize = () => {
        updatePosition()
      }

      const resizeObserver = new ResizeObserver(handleResize)

      if (contentRef.current !== null) {
        resizeObserver.observe(contentRef.current)
      }

      window.addEventListener('resize', handleResize)

      // Handle scroll on scrollable parents
      if (allowScroll && triggerRef.current !== null) {
        const handleScroll = () => updatePosition()
        window.addEventListener('scroll', handleScroll, { passive: true, capture: true })
        
        return () => {
          resizeObserver.disconnect()
          window.removeEventListener('resize', handleResize)
          window.removeEventListener('scroll', handleScroll, { capture: true })
        }
      }

      return () => {
        resizeObserver.disconnect()
        window.removeEventListener('resize', handleResize)
      }
    }, [open, allowScroll, updatePosition])

    // Handle escape key
    useEffect(() => {
      if (!open) {
        return
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault()
          onClose?.()
          onOpenChange?.(false)
        }
      }

      document.addEventListener('keydown', handleKeyDown)

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [open, onClose, onOpenChange])

    // Prevent scroll when modal or allowScroll is false
    useScrollLock(open && !allowScroll)

    // Handle backdrop click
    const handleBackdropClick = useCallback((e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose?.()
        onOpenChange?.(false)
      }
    }, [onClose, onOpenChange])

    // Handle click outside
    useEffect(() => {
      if (!open || modal) {
        return
      }

      const handleClickOutside = (e: MouseEvent) => {
        if (
          contentRef.current !== null &&
          !contentRef.current.contains(e.target as Node) &&
          triggerRef.current !== null &&
          !triggerRef.current.contains(e.target as Node)
        ) {
          onClose?.()
          onOpenChange?.(false)
        }
      }

      // Delay to prevent immediate close when opening via click
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside)
      }, 0)

      return () => {
        clearTimeout(timeoutId)
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [open, modal, onClose, onOpenChange])

    const popoverContent = open && (
      <>
        {/* Backdrop - separate from dialog for accessibility */}
        <div
          className={cn(backdropVariants({ modal }))}
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
        {/* Dialog - not inside aria-hidden */}
        <div
          ref={contentRef}
          id={contentId}
          role="dialog"
          aria-modal={modal}
          aria-label={ariaLabel}
          className={cn(
            'fixed z-50',
            tip && 'drop-shadow-[var(--sinch-comp-popover-shadow,var(--sinch-sys-shadow-overlay-sm))]'
          )}
          style={{
            left: position.x,
            top: position.y,
            maxWidth: contentMaxWidth,
          }}
        >
          <div className={cn(contentWrapperVariants({ orientation, tip }))}>
            <div className={cn(contentVariants({ tip }), className)}>
              {content}
            </div>
            {tip && (
              <svg
                className={cn(tipVariants({ orientation, hidden: tipHidden }))}
                style={tipPosition}
                width="16"
                height="9"
                aria-hidden="true"
              >
                <path d="m0 0 8 8 8 -8"/>
              </svg>
            )}
          </div>
        </div>
      </>
    )

    return (
      <div
        ref={ref}
        className="contents"
        {...props}
      >
        <div
          ref={triggerRef}
          aria-controls={contentId}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          {children}
        </div>
        {createPortal(popoverContent, document.body)}
      </div>
    )
  }
)
Popover.displayName = 'Popover'
