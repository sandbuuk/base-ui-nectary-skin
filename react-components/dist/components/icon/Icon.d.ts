import { VariantProps } from 'class-variance-authority';

declare const iconVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface IconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>, VariantProps<typeof iconVariants> {
    /**
     * Icon name to display
     */
    name: string;
    /**
     * Icon font version
     * @default '1'
     */
    iconsVersion?: '1' | '2';
    /**
     * Icon size
     * @default 'md'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
/**
 * Icon component for displaying icon font glyphs.
 *
 * Uses the icon name as text content with icon font families.
 * Supports size variants and custom styling through CSS variables.
 *
 * @example
 * ```tsx
 * <Icon name="circle-check" />
 * <Icon name="bell" size="lg" />
 * <Icon name="fa-star" iconsVersion="2" className="text-warning" />
 * ```
 */
export declare const Icon: import('react').ForwardRefExoticComponent<IconProps & import('react').RefAttributes<HTMLSpanElement>>;
export {};
