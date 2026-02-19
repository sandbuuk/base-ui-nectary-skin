import { VariantProps } from 'class-variance-authority';
import { ButtonProps } from '../button';

declare const buttonGroupItemVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonGroupItemProps extends Omit<ButtonProps, 'variant' | 'size'>, VariantProps<typeof buttonGroupItemVariants> {
    /**
     * Whether the button is in a toggled/pressed state
     */
    toggled?: boolean;
    /**
     * Internal prop for position tracking (set by ButtonGroup)
     * @internal
     */
    _index?: number;
}
/**
 * ButtonGroupItem component for use within a ButtonGroup.
 *
 * Automatically inherits size and variant from the parent ButtonGroup
 * and handles special styling for first/last items in the group.
 */
export declare const ButtonGroupItem: import('react').ForwardRefExoticComponent<ButtonGroupItemProps & import('react').RefAttributes<HTMLButtonElement>>;
export {};
