import { VariantProps } from 'class-variance-authority';
import { ButtonVariant, ButtonSize } from '../button';

/**
 * Context for ButtonGroup to pass size and variant to children
 */
export interface ButtonGroupContextValue {
    size: ButtonSize;
    variant: ButtonVariant;
    /** Total number of items in the group */
    itemCount: number;
}
export declare const ButtonGroupContext: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').Context<ButtonGroupContextValue | null>;
/**
 * Hook to access ButtonGroup context
 */
export declare function useButtonGroupContext(): ButtonGroupContextValue | null;
declare const buttonGroupVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof buttonGroupVariants> {
    /**
     * Size of all buttons in the group
     * @default 'm'
     */
    size?: ButtonSize;
    /**
     * Variant/style of all buttons in the group
     * @default 'secondary'
     */
    variant?: ButtonVariant;
}
/**
 * ButtonGroup component that wraps ButtonGroupItem children.
 *
 * Provides size and variant context to child items, creating a
 * visually unified button group with connected styling.
 */
export declare const ButtonGroup: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<ButtonGroupProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
