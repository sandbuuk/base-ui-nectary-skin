import { VariantProps } from 'class-variance-authority';

/**
 * File status type determines the background color and icon.
 */
export type FileStatusType = 'pending' | 'loading' | 'progress' | 'success' | 'error';
declare const fileStatusWrapperVariants: (props?: ({
    type?: "progress" | "error" | "loading" | "success" | "pending" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface FileStatusProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'content'>, VariantProps<typeof fileStatusWrapperVariants> {
    /**
     * File status type determines the background color and icon
     * @default 'pending'
     */
    type?: FileStatusType;
    /**
     * File name to display
     */
    filename?: string;
    /**
     * Optional content slot (additional info below filename)
     */
    content?: React.ReactNode;
    /**
     * Optional action slot (e.g., buttons)
     */
    action?: React.ReactNode;
}
/**
 * FileStatus component for displaying file upload/processing status.
 *
 * Shows a file status indicator with:
 * - Status-specific icon (spinner for loading, icons for other states)
 * - Filename with appropriate text color
 * - Optional additional content
 * - Optional action buttons
 *
 * @example
 * ```tsx
 * // Pending file
 * <FileStatus type="pending" filename="document.pdf" />
 *
 * // Loading file with action
 * <FileStatus
 *   type="loading"
 *   filename="uploading.jpg"
 *   action={<button>Cancel</button>}
 * />
 *
 * // Error with content
 * <FileStatus
 *   type="error"
 *   filename="failed.doc"
 *   content="Upload failed. Please try again."
 * />
 * ```
 */
export declare const FileStatus: import('react').ForwardRefExoticComponent<FileStatusProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
