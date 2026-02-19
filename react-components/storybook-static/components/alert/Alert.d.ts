import { VariantProps } from 'class-variance-authority';

/**
 * Alert component for displaying important messages to users.
 * Supports info, warning, and error types with appropriate icons and colors.
 */
declare const alertVariants: (props?: ({
    type?: "error" | "info" | "warn" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type AlertType = 'info' | 'warn' | 'error';
export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>, VariantProps<typeof alertVariants> {
    /** Alert type determines the background color and icon */
    type?: AlertType;
    /** Text content to display in the alert */
    text?: string;
    /** Optional action slot (e.g., a button) */
    action?: React.ReactNode;
    /** Optional close slot (e.g., a close button) */
    close?: React.ReactNode;
    /** Content to display (alternative to text prop) */
    children?: React.ReactNode;
}
export declare const Alert: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<AlertProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
