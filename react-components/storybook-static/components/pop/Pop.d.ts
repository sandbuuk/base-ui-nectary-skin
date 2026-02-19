/**
 * Pop is a low-level floating element utility component.
 * It positions content relative to a target element and handles:
 * - Multiple orientations (top, bottom, left, right, center variants)
 * - Modal and non-modal modes
 * - Scroll locking
 * - Backdrop interactions
 * - Viewport clamping
 */
export type PopOrientation = 'top-left' | 'top-right' | 'top-center' | 'top-stretch' | 'bottom-left' | 'bottom-right' | 'bottom-center' | 'bottom-stretch' | 'center-left' | 'center-right';
export interface PopProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
    /** Whether the pop is open */
    open?: boolean;
    /** Orientation/position of the pop relative to the target */
    orientation?: PopOrientation;
    /** Modal mode - shows backdrop and uses showModal() */
    modal?: boolean;
    /** Allow page scrolling when pop is open (non-modal mode only) */
    allowScroll?: boolean;
    /** Hide the pop if the target is outside the viewport */
    hideOutsideViewport?: boolean;
    /** Inset from viewport edges */
    inset?: number;
    /** Disable closing on backdrop click */
    disableBackdropClose?: boolean;
    /** Callback when the pop requests to close */
    onClose?: () => void;
    /** The target/trigger element */
    children: React.ReactNode;
    /** The floating content */
    content: React.ReactNode;
    /** Accessible label for the dialog */
    'aria-label'?: string;
}
export declare const Pop: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<PopProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
