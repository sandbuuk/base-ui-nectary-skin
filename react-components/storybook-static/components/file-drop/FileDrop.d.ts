import { VariantProps } from 'class-variance-authority';

/**
 * Type of invalid file selection
 */
export type FileDropInvalidType = 'accept' | 'multiple' | 'size';
declare const wrapperVariants: (props?: ({
    isInvalid?: boolean | null | undefined;
    isDisabled?: boolean | null | undefined;
    isDragging?: boolean | null | undefined;
    isDragValid?: boolean | null | undefined;
    isDragInvalid?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface FileDropProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onInvalid'>, VariantProps<typeof wrapperVariants> {
    /**
     * Allows to choose multiple files
     * @default false
     */
    multiple?: boolean;
    /**
     * A unique file type specifier
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers
     */
    accept?: string;
    /**
     * Max file size in bytes
     */
    maxSize?: number;
    /**
     * Disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * Invalid/error state
     * @default false
     */
    invalid?: boolean;
    /**
     * Placeholder text displayed in the drop zone
     */
    placeholder?: string;
    /**
     * Button text (passed to children slot)
     */
    buttonText?: string;
    /**
     * Change handler - receives the selected files
     */
    onChange?: (files: File[]) => void;
    /**
     * Invalid handler - receives the type of validation error
     */
    onInvalid?: (type: FileDropInvalidType) => void;
}
/**
 * FileDrop component for drag-and-drop file uploads.
 *
 * Provides a drop zone for files with validation for file type, count, and size.
 * Also includes a file picker button for traditional file selection.
 */
export declare const FileDrop: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<FileDropProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
