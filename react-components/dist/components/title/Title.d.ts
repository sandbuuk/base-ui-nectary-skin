import { VariantProps } from 'class-variance-authority';

/**
 * Title size/type variants
 */
export type TitleType = 'xl' | 'l' | 'm' | 's' | 'xs';
/**
 * Semantic heading level (1-6)
 */
export type TitleLevel = '1' | '2' | '3' | '4' | '5' | '6';
/**
 * HTML heading elements
 */
export type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
declare const titleVariants: (props?: ({
    type?: "s" | "m" | "l" | "xs" | "xl" | null | undefined;
    ellipsis?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TitleProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'children'>, VariantProps<typeof titleVariants> {
    /**
     * The content to display
     */
    children?: React.ReactNode;
    /**
     * Title size type
     * @default 'm'
     */
    type?: TitleType;
    /**
     * Semantic heading level (1-6). Determines the HTML heading element (h1-h6).
     * If not provided, defaults based on type: xl=1, l=2, m=3, s=4, xs=5
     */
    level?: TitleLevel;
    /**
     * Truncate overflowing text with ellipsis
     * @default false
     */
    ellipsis?: boolean;
    /**
     * Override the HTML element to render as
     * By default, renders as the heading element corresponding to the level
     */
    as?: TitleElement;
}
/**
 * Title component for displaying heading text with various sizes and levels.
 *
 * Supports five sizes (xl, l, m, s, xs) and six semantic heading levels (1-6).
 * The visual size (type) and semantic level can be set independently,
 * allowing for flexible typography while maintaining proper document structure.
 *
 * @example
 * ```tsx
 * // Default h3 heading with medium size
 * <Title>Page Section</Title>
 *
 * // Large heading (h2 by default)
 * <Title type="l">Main Heading</Title>
 *
 * // Small visual size but h1 semantic level
 * <Title type="s" level="1">Document Title</Title>
 *
 * // With ellipsis truncation
 * <Title ellipsis>Very long title that will be truncated...</Title>
 *
 * // Render as span (no semantic heading)
 * <Title as="span" type="m">Styled text</Title>
 * ```
 */
export declare const Title: import('react').ForwardRefExoticComponent<TitleProps & import('react').RefAttributes<HTMLHeadingElement>>;
export {};
