import { VariantProps } from 'class-variance-authority';

declare const dialogVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface PersistentOverlayProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>, VariantProps<typeof dialogVariants> {
    /** Whether the overlay is open */
    open?: boolean;
    /** Dialog caption/title */
    caption?: string;
    /** Callback when visibility is altered externally */
    onVisibilityAltered?: () => void;
    /** Icon to display in the header */
    icon?: React.ReactNode;
    /** Content to display in the dialog body */
    content?: React.ReactNode;
    /** Buttons/actions to display at the bottom */
    buttons?: React.ReactNode;
    /** Accessible label for the dialog */
    'aria-label'?: string;
    /** Interval for checking visibility manipulation (ms) */
    checkInterval?: number;
}
export declare const PersistentOverlay: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<PersistentOverlayProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
