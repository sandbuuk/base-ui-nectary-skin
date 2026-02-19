/**
 * Event types that can be stopped.
 * These are the most common event names that might need propagation stopped.
 */
export type StoppableEvent = 'click' | 'dblclick' | 'mousedown' | 'mouseup' | 'mousemove' | 'mouseenter' | 'mouseleave' | 'mouseover' | 'mouseout' | 'keydown' | 'keyup' | 'keypress' | 'focus' | 'blur' | 'focusin' | 'focusout' | 'change' | 'input' | 'submit' | 'reset' | 'scroll' | 'wheel' | 'touchstart' | 'touchend' | 'touchmove' | 'touchcancel' | 'pointerdown' | 'pointerup' | 'pointermove' | 'pointerenter' | 'pointerleave' | 'pointerover' | 'pointerout' | 'pointercancel' | 'dragstart' | 'drag' | 'dragend' | 'dragenter' | 'dragleave' | 'dragover' | 'drop' | 'contextmenu' | 'copy' | 'cut' | 'paste';
export interface StopEventsProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Array of event names to stop propagation for.
     * Events will be captured at this element and prevented from bubbling up.
     */
    events: StoppableEvent[] | string[];
    /**
     * Children to render inside the container.
     */
    children?: React.ReactNode;
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
export declare const StopEvents: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<StopEventsProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
