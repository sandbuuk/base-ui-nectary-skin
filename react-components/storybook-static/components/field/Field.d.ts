import { VariantProps } from 'class-variance-authority';

declare const fieldVariants: (props?: ({
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface FieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>, Omit<VariantProps<typeof fieldVariants>, 'disabled'> {
    /**
     * Label text displayed above the input
     */
    label?: string;
    /**
     * Optional text displayed in the top row (right-aligned)
     */
    optionalText?: string;
    /**
     * Additional helper text displayed below the input (right-aligned)
     */
    additionalText?: string;
    /**
     * Error/validation message displayed below the input
     * When set, indicates an invalid state
     */
    invalidText?: string;
    /**
     * Disabled state for the field
     * @default false
     */
    disabled?: boolean;
    /**
     * Tooltip element to display next to the label
     */
    tooltip?: React.ReactNode;
    /**
     * The form input element to wrap (Input, Textarea, Select, etc.)
     */
    children?: React.ReactNode;
    /**
     * Custom ID for the label's htmlFor attribute
     * If not provided, an auto-generated ID will be used
     */
    htmlFor?: string;
}
/**
 * Field component that provides a consistent wrapper for form inputs.
 *
 * Includes label, optional text, tooltip slot, additional helper text,
 * and error message display.
 *
 * @example
 * ```tsx
 * <Field label="Email" optionalText="Optional" additionalText="We'll never share your email.">
 *   <Input placeholder="Enter your email" />
 * </Field>
 *
 * <Field label="Password" invalidText="Password is required">
 *   <Input type="password" invalid />
 * </Field>
 * ```
 */
export declare const Field: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<FieldProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
