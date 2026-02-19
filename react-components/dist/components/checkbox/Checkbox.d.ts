import { VariantProps } from 'class-variance-authority';

declare const checkboxWrapperVariants: (props?: ({
    isDisabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof checkboxWrapperVariants> {
    /**
     * Name for form submissions
     */
    name?: string;
    /**
     * Value for form submissions (defaults to 'on' if checked)
     */
    value?: string;
    /**
     * Controlled checked state
     */
    checked?: boolean;
    /**
     * Default checked state for uncontrolled usage
     */
    defaultChecked?: boolean;
    /**
     * Indeterminate state - shows a dash instead of checkmark when checked
     */
    indeterminate?: boolean;
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
     * Label text displayed next to the checkbox
     */
    text?: string;
    /**
     * Accessible label
     */
    'aria-label'?: string;
    /**
     * Change handler - receives the new checked state
     */
    onChange?: (checked: boolean) => void;
    /**
     * Focus handler
     */
    onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
    /**
     * Blur handler
     */
    onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
}
/**
 * Checkbox component for binary or tri-state selections.
 *
 * Supports controlled and uncontrolled patterns, indeterminate state,
 * form integration, and keyboard navigation.
 */
export declare const Checkbox: import('react').ForwardRefExoticComponent<CheckboxProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
