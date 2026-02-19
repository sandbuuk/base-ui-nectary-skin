import { ReactNode } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';

export type FilePickerInvalidType = 'size';
export interface FilePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onInvalid'> {
    /** Allows to choose multiple files */
    multiple?: boolean;
    /** A unique file type specifier (e.g., ".jpg,.png", "image/*") */
    accept?: string;
    /** Max file size in bytes */
    maxSize?: number;
    /** Called when valid files are selected */
    onChange?: (files: File[]) => void;
    /** Called when validation fails (e.g., file too large) */
    onInvalid?: (type: FilePickerInvalidType) => void;
    /** Content to render as the click target (button, etc.) */
    children?: ReactNode;
}
/**
 * FilePicker wraps any clickable element and opens the native file picker when clicked.
 * It handles file selection, validation, and calls the appropriate callbacks.
 */
export declare const FilePicker: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<FilePickerProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
