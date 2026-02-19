import { VariantProps } from 'class-variance-authority';

/**
 * Close event detail types - indicates how the dialog was closed
 */
export type DialogCloseDetail = 'close' | 'escape' | 'backdrop';
declare const dialogContainerVariants: (props?: ({
    open?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface DialogProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>, VariantProps<typeof dialogContainerVariants> {
    /**
     * Whether the dialog is open
     * @default false
     */
    open?: boolean;
    /**
     * Dialog title/caption
     */
    caption?: string;
    /**
     * Callback when the dialog requests to be closed
     * @param detail - The reason for closing ('close', 'escape', or 'backdrop')
     */
    onClose?: (detail: DialogCloseDetail) => void;
    /**
     * Aria label for the close button
     * @default 'Close'
     */
    closeAriaLabel?: string;
    /**
     * Icon to display in the header
     */
    icon?: React.ReactNode;
    /**
     * Footer/buttons content
     */
    buttons?: React.ReactNode;
    /**
     * Content to display in the dialog body
     */
    children?: React.ReactNode;
    /**
     * Container element for the portal
     * @default document.body
     */
    container?: HTMLElement;
    /**
     * Hide the close button
     * @default false
     */
    hideCloseButton?: boolean;
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
export declare const Dialog: import('react').ForwardRefExoticComponent<DialogProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
