import { VariantProps } from 'class-variance-authority';

declare const flagVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface FlagProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'>, VariantProps<typeof flagVariants> {
    /**
     * ISO 3166-1 alpha-2 country code (e.g., "US", "GB", "SE")
     */
    code: string;
    /**
     * Flag size
     * @default 'md'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Optional URL template for flag images.
     * Use %s as placeholder for the country code.
     * If not provided, reads from CSS variable --sinch-flag-src-url
     */
    flagUrlTemplate?: string;
}
/**
 * Flag component for displaying country flags based on ISO 3166-1 alpha-2 country codes.
 *
 * The flag URL is determined by either:
 * 1. The `flagUrlTemplate` prop (with %s as placeholder for the country code)
 * 2. The CSS variable `--sinch-flag-src-url` (with %s as placeholder for the country code)
 *
 * @example
 * ```tsx
 * <Flag code="US" />
 * <Flag code="GB" size="lg" />
 * <Flag code="SE" flagUrlTemplate="https://example.com/flags/%s.svg" />
 * ```
 */
export declare const Flag: import('react').ForwardRefExoticComponent<FlagProps & import('react').RefAttributes<HTMLImageElement>>;
export {};
