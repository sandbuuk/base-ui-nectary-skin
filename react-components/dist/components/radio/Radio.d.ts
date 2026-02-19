import { VariantProps } from 'class-variance-authority';

declare const radioGroupVariants: (props?: ({
    direction?: "row" | "column" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface RadioProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof radioGroupVariants> {
    /**
     * Name for form submissions
     */
    name?: string;
    /**
     * Controlled selected value
     */
    value?: string;
    /**
     * Default selected value for uncontrolled usage
     */
    defaultValue?: string;
    /**
     * Invalid/error state
     * @default false
     */
    invalid?: boolean;
    /**
     * Accessible label for the radio group
     */
    'aria-label': string;
    /**
     * Change handler - receives the selected value
     */
    onChange?: (value: string) => void;
}
export declare const Radio: import('react').ForwardRefExoticComponent<RadioProps & import('react').RefAttributes<HTMLDivElement>>;
export interface RadioOptionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Value of this option
     */
    value: string;
    /**
     * Disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * Label text displayed next to the radio
     */
    text?: string;
    /**
     * Accessible label (required if text is not provided)
     */
    'aria-label'?: string;
    /**
     * ID of element that labels this option
     */
    'aria-labelledby'?: string;
}
export declare const RadioOption: import('react').ForwardRefExoticComponent<RadioOptionProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const RadioGroup: import('react').ForwardRefExoticComponent<RadioProps & import('react').RefAttributes<HTMLDivElement>> & {
    Option: import('react').ForwardRefExoticComponent<RadioOptionProps & import('react').RefAttributes<HTMLDivElement>>;
};
export {};
