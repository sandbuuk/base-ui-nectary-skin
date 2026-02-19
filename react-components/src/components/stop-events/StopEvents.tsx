import { forwardRef, useEffect, useRef, useCallback } from 'react'
import { cn } from '../../utils/cn'

/**
 * Event types that can be stopped.
 * These are the most common event names that might need propagation stopped.
 */
export type StoppableEvent =
  | 'click'
  | 'dblclick'
  | 'mousedown'
  | 'mouseup'
  | 'mousemove'
  | 'mouseenter'
  | 'mouseleave'
  | 'mouseover'
  | 'mouseout'
  | 'keydown'
  | 'keyup'
  | 'keypress'
  | 'focus'
  | 'blur'
  | 'focusin'
  | 'focusout'
  | 'change'
  | 'input'
  | 'submit'
  | 'reset'
  | 'scroll'
  | 'wheel'
  | 'touchstart'
  | 'touchend'
  | 'touchmove'
  | 'touchcancel'
  | 'pointerdown'
  | 'pointerup'
  | 'pointermove'
  | 'pointerenter'
  | 'pointerleave'
  | 'pointerover'
  | 'pointerout'
  | 'pointercancel'
  | 'dragstart'
  | 'drag'
  | 'dragend'
  | 'dragenter'
  | 'dragleave'
  | 'dragover'
  | 'drop'
  | 'contextmenu'
  | 'copy'
  | 'cut'
  | 'paste'

export interface StopEventsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of event names to stop propagation for.
   * Events will be captured at this element and prevented from bubbling up.
   */
  events: StoppableEvent[] | string[]

  /**
   * Children to render inside the container.
   */
  children?: React.ReactNode
}

/**
 * StopEvents is a utility component that prevents specified events from
 * propagating beyond its boundary. It wraps children with `display: contents`
 * so it doesn't affect layout.
 *
 * This is useful when you want to isolate event handling within a portion
 * of the DOM tree, preventing events from bubbling up to parent handlers.
 *
 * Note: This component stops native DOM events from bubbling. React's synthetic
 * events that are registered on ancestors will not receive these events.
 *
 * @example
 * ```tsx
 * // Stop click events from bubbling
 * <StopEvents events={['click']}>
 *   <button onClick={() => console.log('This fires')}>Click me</button>
 * </StopEvents>
 *
 * // Stop multiple events
 * <StopEvents events={['click', 'mousedown', 'mouseup']}>
 *   <div>Interactive content</div>
 * </StopEvents>
 * ```
 */
export const StopEvents = forwardRef<HTMLDivElement, StopEventsProps>(
  ({ events, className, children, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null)

    // Merge refs
    const setRef = useCallback(
      (node: HTMLDivElement | null) => {
        // Update internal ref
        (internalRef as React.MutableRefObject<HTMLDivElement | null>).current = node

        // Forward to external ref
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref !== null) {
          ref.current = node
        }
      },
      [ref]
    )

    useEffect(() => {
      const element = internalRef.current
      if (element === null) return

      const stopEvent = (e: Event) => {
        e.stopPropagation()
      }

      // Add event listeners for all specified events in the bubbling phase
      for (const event of events) {
        element.addEventListener(event, stopEvent)
      }

      // Cleanup
      return () => {
        for (const event of events) {
          element.removeEventListener(event, stopEvent)
        }
      }
    }, [events])

    return (
      <div
        ref={setRef}
        className={cn('contents', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
StopEvents.displayName = 'StopEvents'
