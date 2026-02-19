import { VariantProps } from 'class-variance-authority';

/**
 * Text size/type variants
 */
export type TextType = 'm' | 's' | 'xs' | 'xxs';
/**
 * Elements that Text can render as
 */
export type TextElement = 'p' | 'span' | 'div' | 'label';
declare const textVariants: (props?: ({
    type?: "s" | "m" | "xs" | "xxs" | null | undefined;
    inline?: boolean | null | undefined;
    emphasized?: boolean | null | undefined;
    ellipsis?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'>, VariantProps<typeof textVariants> {
    /**
     * The content to display
     */
    children?: React.ReactNode;
    /**
     * Text size type
     * @default 'm'
     */
    type?: TextType;
    /**
     * Display as inline element (span-like) instead of block (paragraph-like)
     * @default false
     */
    inline?: boolean;
    /**
     * Apply emphasized (bolder) styling. Only works with 'm' and 's' sizes.
     * @default false
     */
    emphasized?: boolean;
    /**
     * Truncate overflowing text with ellipsis
     * @default false
     */
    ellipsis?: boolean;
    /**
     * The HTML element to render as
     * @default 'p' when not inline, 'span' when inline
     */
    as?: TextElement;
}
/**
 * Text component for displaying body text with various sizes and styles.
 *
 * Supports four sizes (m, s, xs, xxs), emphasized styling for m and s sizes,
 * inline/block display modes, and text truncation with ellipsis.
 *
 * @example
 * ```tsx
 * // Default paragraph text
 * <Text>Hello World</Text>
 *
 * // Small emphasized text
 * <Text type="s" emphasized>Important note</Text>
 *
 * // Inline text with ellipsis
 * <Text inline ellipsis>Long text that will truncate...</Text>
 *
 * // Render as a label
 * <Text as="label" type="s">Form field label</Text>
 * ```
 */
export declare const Text: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<TextProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLElement>>;
export {};
