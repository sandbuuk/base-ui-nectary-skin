import { VariantProps } from 'class-variance-authority';

declare const textareaWrapperVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>, VariantProps<typeof textareaWrapperVariants> {
    /**
     * Controlled value
     */
    value?: string;
    /**
     * Default value for uncontrolled usage
     */
    defaultValue?: string;
    /**
     * Placeholder text
     */
    placeholder?: string;
    /**
     * Invalid/error state
     * @default false
     */
    invalid?: boolean;
    /**
     * Disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * Read-only state
     * @default false
     */
    readOnly?: boolean;
    /**
     * Required field
     * @default false
     */
    required?: boolean;
    /**
     * Number of visible rows
     */
    rows?: number;
    /**
     * Minimum number of rows (auto-resize mode)
     */
    minRows?: number;
    /**
     * Maximum number of rows (auto-resize mode)
     */
    maxRows?: number;
    /**
     * Whether the textarea is resizable by dragging
     * @default false
     */
    resizable?: boolean;
    /**
     * Accessible label
     */
    'aria-label'?: string;
    /**
     * Content displayed in the bottom slot
     */
    bottomContent?: React.ReactNode;
    /**
     * Change handler - receives the new value string
     */
    onChange?: (value: string) => void;
    /**
     * Focus handler
     */
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * Blur handler
     */
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * Key down handler
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
/**
 * Textarea component for multi-line text input.
 *
 * Supports controlled and uncontrolled patterns, auto-resize behavior,
 * error states, and a resizable drag handle.
 */
export declare const Textarea: import('react').ForwardRefExoticComponent<TextareaProps & import('react').RefAttributes<HTMLTextAreaElement>>;
export {};
