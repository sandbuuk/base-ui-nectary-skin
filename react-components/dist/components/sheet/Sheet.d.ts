import { VariantProps } from 'class-variance-authority';

/**
 * Sheet placement options
 */
export type SheetPlacement = 'left' | 'right' | 'top' | 'bottom';
/**
 * Sheet overlay mode
 * - 'modal': Shows backdrop and traps focus
 * - 'push': No backdrop, content appears alongside page content
 */
export type SheetOverlayMode = 'modal' | 'push';
/**
 * Close event detail types
 */
export type SheetCloseDetail = 'close' | 'escape' | 'backdrop';
/**
 * Animation event detail
 */
export interface SheetAnimationDetail {
    action: 'expand' | 'collapse';
    width: number;
    height: number;
    duration: string;
    easing: string;
}
declare const sheetDialogVariants: (props?: ({
    placement?: "left" | "right" | "bottom" | "top" | null | undefined;
    overlay?: "push" | "modal" | null | undefined;
    open?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SheetProps extends VariantProps<typeof sheetDialogVariants> {
    /**
     * Whether the sheet is open
     * @default false
     */
    open?: boolean;
    /**
     * Sheet placement/position
     * @default 'right'
     */
    placement?: SheetPlacement;
    /**
     * Overlay mode - modal (with backdrop) or push (no backdrop)
     * @default 'modal'
     */
    overlay?: SheetOverlayMode;
    /**
     * Callback when the sheet requests to be closed
     */
    onClose?: (detail: SheetCloseDetail) => void;
    /**
     * Callback when sheet slide animation starts
     */
    onSheetAnimationStart?: (detail: SheetAnimationDetail) => void;
    /**
     * Callback when sheet slide animation ends
     */
    onSheetAnimationEnd?: (detail: SheetAnimationDetail) => void;
    /**
     * Title content for the sheet header
     */
    title?: React.ReactNode;
    /**
     * Footer content for the sheet
     */
    footer?: React.ReactNode;
    /**
     * Container element for the portal (defaults to document.body)
     */
    container?: HTMLElement;
    /**
     * Additional className for the sheet
     */
    className?: string;
    /**
     * Children content
     */
    children?: React.ReactNode;
    /**
     * ID for the sheet element
     */
    id?: string;
    /**
     * Custom styles
     */
    style?: React.CSSProperties;
    /**
     * Additional data attributes
     */
    'data-testid'?: string;
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
export declare const Sheet: import('react').ForwardRefExoticComponent<SheetProps & import('react').RefAttributes<HTMLDivElement>>;
export interface SheetTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The title text
     */
    title: string;
    /**
     * Optional description text
     */
    description?: string;
    /**
     * Callback when close button is clicked
     */
    onClose?: () => void;
    /**
     * Aria label for the close button
     * @default 'Close'
     */
    closeAriaLabel?: string;
    /**
     * Icon to display before the title
     */
    icon?: React.ReactNode;
    /**
     * Hide the close button
     * @default false
     */
    hideCloseButton?: boolean;
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
export declare const SheetTitle: import('react').ForwardRefExoticComponent<SheetTitleProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
