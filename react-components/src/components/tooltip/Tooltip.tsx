import { type VariantProps, cva } from 'class-variance-authority'
import {
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { cn } from '../../utils/cn'

/**
 * Tooltip component that displays informational text on hover.
 * Supports multiple orientations, text alignment, and timing options.
 */

const SHOW_DELAY_SLOW = 1000
const SHOW_DELAY_FAST = 250
const ANIMATION_DURATION = 100

const tooltipContentVariants = cva(
  // Base styles for the tooltip content
  [
    'absolute',
    'z-50',
    'max-w-[300px]',
    'px-1.5',
    'py-0.5',
    'rounded-[var(--sinch-comp-tooltip-shape-radius,4px)]',
    'bg-[var(--sinch-comp-tooltip-color-background)]',
    'text-[var(--sinch-comp-tooltip-color-text)]',
    'font-[var(--sinch-comp-tooltip-font-body)]',
    'text-sm',
    'pointer-events-none',
    'transition-opacity',
    'duration-100',
    'drop-shadow-[var(--sinch-comp-tooltip-shadow)]',
    'break-words',
  ],
  {
    variants: {
      orientation: {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
        'top-left': 'bottom-full right-0 mb-2',
        'top-right': 'bottom-full left-0 mb-2',
        'bottom-left': 'top-full right-0 mt-2',
        'bottom-right': 'top-full left-0 mt-2',
      },
      textAlign: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
      visible: {
        true: 'opacity-100',
        false: 'opacity-0',
      },
    },
    defaultVariants: {
      orientation: 'top',
      textAlign: 'left',
      visible: false,
    },
  }
)

const tipVariants = cva(
  // Base styles for the arrow tip
  [
    'absolute',
    'w-2',
    'h-1',
    'fill-[var(--sinch-comp-tooltip-color-background)]',
    'pointer-events-none',
  ],
  {
    variants: {
      orientation: {
        top: 'top-full left-1/2 -translate-x-1/2',
        bottom: 'bottom-full left-1/2 -translate-x-1/2 rotate-180',
        left: 'left-full top-1/2 -translate-y-1/2 -rotate-90',
        right: 'right-full top-1/2 -translate-y-1/2 rotate-90',
        'top-left': 'top-full right-4',
        'top-right': 'top-full left-4',
        'bottom-left': 'bottom-full right-4 rotate-180',
        'bottom-right': 'bottom-full left-4 rotate-180',
      },
    },
    defaultVariants: {
      orientation: 'top',
    },
  }
)

export type TooltipOrientation =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

export type TooltipTextAlign = 'left' | 'center' | 'right'
export type TooltipType = 'slow' | 'fast'

export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>,
  Omit<VariantProps<typeof tooltipContentVariants>, 'visible'> {
  /** Text content to display in the tooltip */
  text: string,
  /** Orientation/position of the tooltip relative to the target */
  orientation?: TooltipOrientation,
  /** Text alignment within the tooltip */
  textAlign?: TooltipTextAlign,
  /** Type affects the delay before showing - 'slow' (1000ms) or 'fast' (250ms) */
  type?: TooltipType,
  /**
   * Controlled open state. When set, controls whether the tooltip is visible.
   * If undefined, the tooltip operates in uncontrolled mode (hover-based).
   */
  isOpen?: boolean,
  /** Callback when the tooltip is shown */
  onShow?: () => void,
  /** Callback when the tooltip is hidden */
  onHide?: () => void,
  /** The target element that triggers the tooltip */
  children: React.ReactElement,
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      className,
      children,
      text,
      orientation = 'top',
      textAlign = 'left',
      type = 'slow',
      isOpen: controlledIsOpen,
      onShow,
      onHide,
      ...props
    },
    ref
  ) => {
    const [internalIsOpen, setInternalIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const showTimeoutRef = useRef<number | null>(null)
    const hideTimeoutRef = useRef<number | null>(null)

    // Determine if controlled or uncontrolled
    const isControlled = controlledIsOpen !== undefined
    const isOpen = isControlled ? controlledIsOpen : internalIsOpen

    // Clear timeouts on unmount
    useEffect(() => {
      return () => {
        if (showTimeoutRef.current !== null) {
          window.clearTimeout(showTimeoutRef.current)
        }

        if (hideTimeoutRef.current !== null) {
          window.clearTimeout(hideTimeoutRef.current)
        }
      }
    }, [])

    // Handle visibility animation
    useEffect(() => {
      if (isOpen) {
        // Small delay to ensure DOM is ready for animation
        requestAnimationFrame(() => {
          setIsVisible(true)
        })
        onShow?.()
      } else {
        setIsVisible(false)
        // Allow animation to complete before fully hiding
        hideTimeoutRef.current = window.setTimeout(() => {
          onHide?.()
        }, ANIMATION_DURATION)
      }
    }, [isOpen, onShow, onHide])

    const handleMouseEnter = useCallback(() => {
      if (isControlled || text.length === 0) {
        return
      }

      // Clear any pending hide timeout
      if (hideTimeoutRef.current !== null) {
        window.clearTimeout(hideTimeoutRef.current)
        hideTimeoutRef.current = null
      }

      const delay = type === 'fast' ? SHOW_DELAY_FAST : SHOW_DELAY_SLOW

      showTimeoutRef.current = window.setTimeout(() => {
        setInternalIsOpen(true)
      }, delay)
    }, [isControlled, type, text])

    const handleMouseLeave = useCallback(() => {
      if (isControlled) {
        return
      }

      // Clear any pending show timeout
      if (showTimeoutRef.current !== null) {
        window.clearTimeout(showTimeoutRef.current)
        showTimeoutRef.current = null
      }

      setInternalIsOpen(false)
    }, [isControlled])

    const handleMouseDown = useCallback(() => {
      if (isControlled) {
        return
      }

      // Immediately hide on mouse down
      if (showTimeoutRef.current !== null) {
        window.clearTimeout(showTimeoutRef.current)
        showTimeoutRef.current = null
      }

      setInternalIsOpen(false)
    }, [isControlled])

    // Don't render tooltip if no text
    if (text.length === 0) {
      return children
    }

    // Clone the child to add event handlers
    const childWithHandlers = isValidElement(children)
      ? cloneElement(children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
        onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
          handleMouseEnter()
          ;(children.props as React.HTMLAttributes<HTMLElement>)?.onMouseEnter?.(e)
        },
        onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
          handleMouseLeave()
          ;(children.props as React.HTMLAttributes<HTMLElement>)?.onMouseLeave?.(e)
        },
        onMouseDown: (e: React.MouseEvent<HTMLElement>) => {
          handleMouseDown()
          ;(children.props as React.HTMLAttributes<HTMLElement>)?.onMouseDown?.(e)
        },
      })
      : children

    return (
      <div
        ref={ref}
        className={cn('relative inline-flex', className)}
        role="tooltip"
        {...props}
      >
        {childWithHandlers}
        {(isOpen || isVisible) && (
          <div
            className={cn(
              tooltipContentVariants({
                orientation,
                textAlign,
                visible: isVisible,
              })
            )}
          >
            {text}
            <svg
              className={cn(tipVariants({ orientation }))}
              viewBox="0 0 8 4"
              aria-hidden="true"
            >
              <path d="m4 4 4-4h-8l4 4Z"/>
            </svg>
          </div>
        )}
      </div>
    )
  }
)
Tooltip.displayName = 'Tooltip'
