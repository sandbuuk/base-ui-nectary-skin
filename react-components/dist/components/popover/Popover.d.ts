import { VariantProps } from 'class-variance-authority';

declare const contentVariants: (props?: ({
    tip?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type PopoverOrientation = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export interface PopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>, VariantProps<typeof contentVariants> {
    /** Whether the popover is open */
    open?: boolean;
    /** Orientation/position of the popover relative to the target */
    orientation?: PopoverOrientation;
    /** Whether to show the tip arrow pointing to the trigger */
    tip?: boolean;
    /** Modal mode - shows backdrop and traps focus */
    modal?: boolean;
    /** Allow page scrolling when popover is open (only in non-modal mode) */
    allowScroll?: boolean;
    /** Callback when the popover requests to close */
    onClose?: () => void;
    /** The trigger element */
    children: React.ReactNode;
    /** The popover content */
    content: React.ReactNode;
    /** Accessible label for the popover */
    'aria-label'?: string;
}
export declare const Popover: import('react').ForwardRefExoticComponent<PopoverProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
