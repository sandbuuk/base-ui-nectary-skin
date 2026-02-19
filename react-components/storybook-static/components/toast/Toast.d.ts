import { default as React } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

export type ToastType = 'info' | 'warn' | 'error' | 'success';
export type ToastOrigin = 'top-right' | 'bottom-right';
export interface ToastData {
    id: string;
    type: ToastType;
    text: string;
    persistent?: boolean;
    action?: React.ReactNode;
    close?: React.ReactNode;
}
declare const toastVariants: (props?: ({
    type?: "error" | "success" | "info" | "warn" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
    /** Toast type determines the background color and icon */
    type?: ToastType;
    /** Text content to display */
    text?: string;
    /** If true, toast won't auto-dismiss after 5 seconds */
    persistent?: boolean;
    /** Callback when toast times out */
    onTimeout?: () => void;
    /** Optional action slot (e.g., a button) */
    action?: React.ReactNode;
    /** Optional close slot (e.g., a close button) */
    close?: React.ReactNode;
    /** Content to display (alternative to text prop) */
    children?: React.ReactNode;
}
/**
 * Individual Toast notification component
 */
export declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLDivElement>>;
interface ToastContextValue {
    toasts: ToastData[];
    addToast: (toast: Omit<ToastData, 'id'>) => string;
    removeToast: (id: string) => void;
    clearAll: () => void;
}
export interface ToastProviderProps {
    children: React.ReactNode;
    /** Position of toast container */
    origin?: ToastOrigin;
    /** Disable animations (for reduced motion) */
    reduceMotion?: boolean;
}
/**
 * Toast Provider - Wrap your app with this to enable toast notifications
 *
 * @example
 * ```tsx
 * <ToastProvider origin="bottom-right">
 *   <App />
 * </ToastProvider>
 * ```
 */
export declare function ToastProvider({ children, origin, reduceMotion, }: ToastProviderProps): import("react/jsx-runtime").JSX.Element;
/**
 * Hook to access toast functionality
 *
 * @example
 * ```tsx
 * const { addToast, removeToast } = useToast()
 *
 * // Show a toast
 * const id = addToast({ type: 'success', text: 'Saved!' })
 *
 * // Remove it manually
 * removeToast(id)
 * ```
 */
export declare function useToast(): ToastContextValue;
export interface ToastManagerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Position of toast container */
    origin?: ToastOrigin;
    /** Toast children (rendered in hidden slot, cloned to visible list) */
    children?: React.ReactNode;
}
/**
 * ToastManager - A declarative wrapper for managing toasts as children
 *
 * This mirrors the web component API where toasts are passed as children.
 * For most React use cases, prefer ToastProvider + useToast.
 *
 * @example
 * ```tsx
 * <ToastManager origin="bottom-right">
 *   {showToast && <Toast type="success" text="Saved!" />}
 * </ToastManager>
 * ```
 */
export declare const ToastManager: React.ForwardRefExoticComponent<ToastManagerProps & React.RefAttributes<HTMLDivElement>>;
export declare const toast: {
    success: (text: string, options?: Partial<Omit<ToastData, "id" | "type" | "text">>) => {
        close?: React.ReactNode;
        action?: React.ReactNode;
        persistent?: boolean;
        type: "success";
        text: string;
    };
    error: (text: string, options?: Partial<Omit<ToastData, "id" | "type" | "text">>) => {
        close?: React.ReactNode;
        action?: React.ReactNode;
        persistent?: boolean;
        type: "error";
        text: string;
    };
    warn: (text: string, options?: Partial<Omit<ToastData, "id" | "type" | "text">>) => {
        close?: React.ReactNode;
        action?: React.ReactNode;
        persistent?: boolean;
        type: "warn";
        text: string;
    };
    info: (text: string, options?: Partial<Omit<ToastData, "id" | "type" | "text">>) => {
        close?: React.ReactNode;
        action?: React.ReactNode;
        persistent?: boolean;
        type: "info";
        text: string;
    };
};
export {};
