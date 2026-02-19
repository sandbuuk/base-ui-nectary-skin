import { VariantProps } from 'class-variance-authority';

/**
 * InlineAlert component for displaying prominent messages within content.
 * Supports info, success, warning, and error types with appropriate icons and colors.
 * Unlike Alert, InlineAlert includes a caption/title and has a different layout.
 */
declare const inlineAlertVariants: (props?: ({
    type?: "error" | "success" | "info" | "warn" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type InlineAlertType = 'info' | 'success' | 'warn' | 'error';
export interface InlineAlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>, VariantProps<typeof inlineAlertVariants> {
    /** Alert type determines the background color, icon, and text color */
    type?: InlineAlertType;
    /** Main text content to display */
    text?: string;
    /** Optional caption/title displayed above the text */
    caption?: string;
    /** Custom icon name (overrides default type icon) */
    icon?: string;
    /** Optional action slot (e.g., buttons) */
    action?: React.ReactNode;
    /** Optional close slot (e.g., a close button) */
    close?: React.ReactNode;
    /** Content to display (alternative to text prop) */
    children?: React.ReactNode;
}
export declare const InlineAlert: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<InlineAlertProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
