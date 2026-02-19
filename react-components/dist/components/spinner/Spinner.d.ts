import { VariantProps } from 'class-variance-authority';

declare const spinnerVariants: (props?: ({
    size?: "s" | "m" | "l" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SpinnerProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'children'>, VariantProps<typeof spinnerVariants> {
    /**
     * Spinner size
     * @default 'm'
     */
    size?: 's' | 'm' | 'l';
}
/**
 * Spinner component for indicating loading state.
 *
 * Uses an animated SVG circle with a foreground arc.
 */
export declare const Spinner: import('react').ForwardRefExoticComponent<SpinnerProps & import('react').RefAttributes<SVGSVGElement>>;
export {};
