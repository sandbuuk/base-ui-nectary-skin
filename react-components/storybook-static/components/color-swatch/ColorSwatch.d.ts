import { VariantProps } from 'class-variance-authority';

/**
 * Predefined swatch colors that map to CSS variables.
 */
export declare const SKINTONE_SWATCH_COLORS: readonly ["skintone-dark", "skintone-default", "skintone-light", "skintone-light-medium", "skintone-medium", "skintone-medium-dark"];
export declare const SWATCH_COLORS: readonly ["blue", "dark-blue", "dark-gray", "dark-green", "dark-orange", "dark-pink", "dark-red", "dark-violet", "dark-yellow", "default", "gray", "green", "light-blue", "light-gray", "light-green", "light-orange", "light-pink", "light-red", "light-violet", "light-yellow", "orange", "pink", "red", "violet", "yellow", "skintone-dark", "skintone-default", "skintone-light", "skintone-light-medium", "skintone-medium", "skintone-medium-dark"];
export type SkinToneColor = typeof SKINTONE_SWATCH_COLORS[number];
export type SwatchColor = typeof SWATCH_COLORS[number];
/**
 * Checks if a given color name is a predefined swatch color.
 */
export declare const isSwatchColor: (value?: string) => value is SwatchColor;
/**
 * Gets the CSS variable for a swatch color's background.
 */
export declare const getSwatchColorBg: (id: SwatchColor) => "var(--sinch-comp-color-swatch-color-blue-background)" | "var(--sinch-comp-color-swatch-color-gray-background)" | "var(--sinch-comp-color-swatch-color-green-background)" | "var(--sinch-comp-color-swatch-color-orange-background)" | "var(--sinch-comp-color-swatch-color-pink-background)" | "var(--sinch-comp-color-swatch-color-red-background)" | "var(--sinch-comp-color-swatch-color-violet-background)" | "var(--sinch-comp-color-swatch-color-yellow-background)" | "var(--sinch-comp-color-swatch-color-default-background)" | "var(--sinch-comp-color-swatch-color-dark-blue-background)" | "var(--sinch-comp-color-swatch-color-dark-gray-background)" | "var(--sinch-comp-color-swatch-color-dark-green-background)" | "var(--sinch-comp-color-swatch-color-dark-orange-background)" | "var(--sinch-comp-color-swatch-color-dark-pink-background)" | "var(--sinch-comp-color-swatch-color-dark-red-background)" | "var(--sinch-comp-color-swatch-color-dark-violet-background)" | "var(--sinch-comp-color-swatch-color-dark-yellow-background)" | "var(--sinch-comp-color-swatch-color-light-blue-background)" | "var(--sinch-comp-color-swatch-color-light-gray-background)" | "var(--sinch-comp-color-swatch-color-light-green-background)" | "var(--sinch-comp-color-swatch-color-light-orange-background)" | "var(--sinch-comp-color-swatch-color-light-pink-background)" | "var(--sinch-comp-color-swatch-color-light-red-background)" | "var(--sinch-comp-color-swatch-color-light-violet-background)" | "var(--sinch-comp-color-swatch-color-light-yellow-background)" | "var(--sinch-comp-color-swatch-color-skintone-dark-background)" | "var(--sinch-comp-color-swatch-color-skintone-default-background)" | "var(--sinch-comp-color-swatch-color-skintone-light-background)" | "var(--sinch-comp-color-swatch-color-skintone-light-medium-background)" | "var(--sinch-comp-color-swatch-color-skintone-medium-background)" | "var(--sinch-comp-color-swatch-color-skintone-medium-dark-background)";
/**
 * Gets the CSS variable for a swatch color's foreground.
 */
export declare const getSwatchColorFg: (id: SwatchColor) => "var(--sinch-comp-color-swatch-color-blue-foreground)" | "var(--sinch-comp-color-swatch-color-gray-foreground)" | "var(--sinch-comp-color-swatch-color-green-foreground)" | "var(--sinch-comp-color-swatch-color-orange-foreground)" | "var(--sinch-comp-color-swatch-color-pink-foreground)" | "var(--sinch-comp-color-swatch-color-red-foreground)" | "var(--sinch-comp-color-swatch-color-violet-foreground)" | "var(--sinch-comp-color-swatch-color-yellow-foreground)" | "var(--sinch-comp-color-swatch-color-default-foreground)" | "var(--sinch-comp-color-swatch-color-dark-blue-foreground)" | "var(--sinch-comp-color-swatch-color-dark-gray-foreground)" | "var(--sinch-comp-color-swatch-color-dark-green-foreground)" | "var(--sinch-comp-color-swatch-color-dark-orange-foreground)" | "var(--sinch-comp-color-swatch-color-dark-pink-foreground)" | "var(--sinch-comp-color-swatch-color-dark-red-foreground)" | "var(--sinch-comp-color-swatch-color-dark-violet-foreground)" | "var(--sinch-comp-color-swatch-color-dark-yellow-foreground)" | "var(--sinch-comp-color-swatch-color-light-blue-foreground)" | "var(--sinch-comp-color-swatch-color-light-gray-foreground)" | "var(--sinch-comp-color-swatch-color-light-green-foreground)" | "var(--sinch-comp-color-swatch-color-light-orange-foreground)" | "var(--sinch-comp-color-swatch-color-light-pink-foreground)" | "var(--sinch-comp-color-swatch-color-light-red-foreground)" | "var(--sinch-comp-color-swatch-color-light-violet-foreground)" | "var(--sinch-comp-color-swatch-color-light-yellow-foreground)" | "var(--sinch-comp-color-swatch-color-skintone-dark-foreground)" | "var(--sinch-comp-color-swatch-color-skintone-default-foreground)" | "var(--sinch-comp-color-swatch-color-skintone-light-foreground)" | "var(--sinch-comp-color-swatch-color-skintone-light-medium-foreground)" | "var(--sinch-comp-color-swatch-color-skintone-medium-foreground)" | "var(--sinch-comp-color-swatch-color-skintone-medium-dark-foreground)";
declare const colorSwatchVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ColorSwatchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof colorSwatchVariants> {
    /**
     * The color name. Can be a predefined swatch color (e.g., 'blue', 'red')
     * or any valid CSS color value (e.g., '#ff0000', 'rgb(255, 0, 0)').
     */
    name?: string | null;
}
export declare const ColorSwatch: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<ColorSwatchProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
