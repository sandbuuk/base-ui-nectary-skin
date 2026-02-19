import { VariantProps } from 'class-variance-authority';

declare const inputWrapperVariants: (props?: ({
    size?: "s" | "m" | "l" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type InputType = 'text' | 'password' | 'number';
export type InputSize = 's' | 'm' | 'l';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'type'>, Omit<VariantProps<typeof inputWrapperVariants>, 'size'> {
    /**
     * Input type
     * @default 'text'
     */
    type?: InputType;
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
     * Input size
     * @default 'm'
     */
    size?: InputSize;
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
     * Autocomplete attribute
     */
    autoComplete?: string;
    /**
     * Maximum length
     */
    maxLength?: number;
    /**
     * Minimum value (for type="number")
     */
    min?: number;
    /**
     * Maximum value (for type="number")
     */
    max?: number;
    /**
     * Step value (for type="number")
     */
    step?: number;
    /**
     * Accessible label
     */
    'aria-label'?: string;
    /**
     * Icon element displayed on the left
     */
    icon?: React.ReactNode;
    /**
     * Content displayed on the left side (before the input)
     */
    leftAddon?: React.ReactNode;
    /**
     * Content displayed on the right side (after the input)
     */
    rightAddon?: React.ReactNode;
    /**
     * Change handler - receives the new value string
     */
    onChange?: (value: string) => void;
    /**
     * Focus handler
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Blur handler
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Key down handler
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
/**
 * Input component for text entry.
 *
 * Supports controlled and uncontrolled patterns, multiple input types,
 * error states, and icon/addon slots.
 */
export declare const Input: import('react').ForwardRefExoticComponent<InputProps & import('react').RefAttributes<HTMLInputElement>>;
export {};
