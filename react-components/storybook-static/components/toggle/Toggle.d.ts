import { VariantProps } from 'class-variance-authority';

declare const toggleVariants: (props?: ({
    small?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ToggleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, Omit<VariantProps<typeof toggleVariants>, 'disabled'> {
    /**
     * Controlled checked state
     */
    checked?: boolean;
    /**
     * Default checked state for uncontrolled usage
     */
    defaultChecked?: boolean;
    /**
     * Small size variant
     * @default false
     */
    small?: boolean;
    /**
     * Show on/off labels inside the toggle
     * @default false
     */
    labeled?: boolean;
    /**
     * Disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * Label text displayed next to the toggle
     */
    text?: string;
    /**
     * Accessible label (required if no text)
     */
    'aria-label'?: string;
    /**
     * Change handler - receives the new checked value
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
 * Toggle component for boolean on/off states.
 *
 * Supports controlled and uncontrolled patterns, small size variant,
 * optional on/off labels, and accessible keyboard navigation.
 */
export declare const Toggle: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<ToggleProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
