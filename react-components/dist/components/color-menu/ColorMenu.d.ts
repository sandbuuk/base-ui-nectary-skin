import { VariantProps } from 'class-variance-authority';

declare const colorMenuVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ColorMenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof colorMenuVariants> {
    /** The currently selected color value */
    value?: string;
    /** Default value for uncontrolled mode */
    defaultValue?: string;
    /** Number of rows to show before scrolling */
    rows?: number;
    /** Number of columns to display */
    cols?: number;
    /** Callback when a color is selected */
    onChange?: (value: string) => void;
}
export declare const ColorMenu: import('react').ForwardRefExoticComponent<ColorMenuProps & import('react').RefAttributes<HTMLDivElement>>;
export interface ColorMenuOptionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value'> {
    /** The color value. Can be a predefined swatch color or any CSS color. */
    value: string;
    /** Internal index - set automatically by ColorMenu */
    index?: number;
}
export declare const ColorMenuOption: import('react').ForwardRefExoticComponent<ColorMenuOptionProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const ColorMenuCompound: import('react').ForwardRefExoticComponent<ColorMenuProps & import('react').RefAttributes<HTMLDivElement>> & {
    Option: import('react').ForwardRefExoticComponent<ColorMenuOptionProps & import('react').RefAttributes<HTMLDivElement>>;
};
export {};
