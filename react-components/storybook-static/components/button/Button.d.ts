import { VariantProps } from 'class-variance-authority';

/**
 * Button variant types from the web component.
 * Note: 'tertiary' is deprecated and maps to 'subtle-primary'
 */
export type ButtonVariant = 'primary' | 'secondary' | 'subtle-primary' | 'subtle-secondary' | 'cta-primary' | 'cta-secondary' | 'destructive';
export type ButtonSize = 'xs' | 's' | 'm' | 'l';
declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "subtle-primary" | "subtle-secondary" | "cta-primary" | "cta-secondary" | "destructive" | null | undefined;
    size?: "s" | "m" | "l" | "xs" | null | undefined;
    iconOnly?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ButtonFormType = 'submit' | 'reset' | 'button';
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>, Omit<VariantProps<typeof buttonVariants>, 'iconOnly'> {
    /**
     * Button variant/style
     * @default 'secondary'
     */
    variant?: ButtonVariant;
    /**
     * Button size
     * @default 'm'
     */
    size?: ButtonSize;
    /**
     * Text content for the button
     */
    text?: string;
    /**
     * Icon to display (for icon-only buttons)
     */
    icon?: React.ReactNode;
    /**
     * Icon to display on the left side of the text
     */
    leftIcon?: React.ReactNode;
    /**
     * Icon to display on the right side of the text
     */
    rightIcon?: React.ReactNode;
    /**
     * Whether the button is in a loading state
     */
    loading?: boolean;
    /**
     * Whether the button is in a toggled/pressed state
     * Only applicable for subtle variants
     */
    toggled?: boolean;
    /**
     * Form behavior type
     * @default 'button'
     */
    formType?: ButtonFormType;
}
/**
 * Button component for user interactions.
 *
 * Supports multiple variants (primary, secondary, subtle, cta, destructive),
 * sizes (xs, s, m, l), icons, loading state, and toggled state.
 */
export declare const Button: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<ButtonProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLButtonElement>>;
export {};
