import { VariantProps } from 'class-variance-authority';

/**
 * Tag color options from the web component.
 * These map to CSS variables: --sinch-comp-tag-color-{color}-background/foreground
 */
export type TagColor = 'default' | 'gray' | 'light-gray' | 'dark-gray' | 'blue' | 'light-blue' | 'dark-blue' | 'green' | 'light-green' | 'dark-green' | 'yellow' | 'light-yellow' | 'dark-yellow' | 'orange' | 'light-orange' | 'dark-orange' | 'red' | 'light-red' | 'dark-red' | 'pink' | 'light-pink' | 'dark-pink' | 'violet' | 'light-violet' | 'dark-violet' | 'danger' | 'warning' | 'success' | 'info';
/**
 * Tag size variants
 */
export type TagSize = 's' | 'm';
declare const tagVariants: (props?: ({
    size?: "s" | "m" | null | undefined;
    ellipsis?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TagProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof tagVariants> {
    /**
     * Text content for the tag
     */
    text?: string;
    /**
     * Color variant for the tag
     * @default 'default'
     */
    color?: TagColor;
    /**
     * Use small size variant
     * @default false
     */
    small?: boolean;
    /**
     * Tag size ('s' or 'm')
     * @default 'm'
     */
    size?: TagSize;
    /**
     * Enable text truncation with ellipsis
     * @default false
     */
    ellipsis?: boolean;
    /**
     * Icon to display before the text
     */
    icon?: React.ReactNode;
}
/**
 * Tag component for displaying labels, categories, or status indicators.
 *
 * Supports multiple color variants, two sizes (s, m), optional icon,
 * and text truncation with ellipsis.
 *
 * @example
 * ```tsx
 * // Default tag
 * <Tag text="Label" />
 *
 * // Colored tag
 * <Tag text="Success" color="success" />
 *
 * // Small tag with icon
 * <Tag text="Status" small icon={<Icon name="check" />} />
 *
 * // Tag with ellipsis
 * <Tag text="Very long label text" ellipsis />
 * ```
 */
export declare const Tag: import('react').ForwardRefExoticComponent<TagProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
