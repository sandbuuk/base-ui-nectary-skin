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
export declare const Spinner: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<SpinnerProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<SVGSVGElement>>;
export {};
