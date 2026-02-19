import { VariantProps } from 'class-variance-authority';

/**
 * Tag color options for chips
 */
export type TagColor = 'default' | 'blue' | 'danger' | 'dark-blue' | 'dark-gray' | 'dark-green' | 'dark-orange' | 'dark-pink' | 'dark-red' | 'dark-violet' | 'dark-yellow' | 'gray' | 'green' | 'info' | 'light-blue' | 'light-gray' | 'light-green' | 'light-orange' | 'light-pink' | 'light-red' | 'light-violet' | 'light-yellow' | 'orange' | 'pink' | 'red' | 'success' | 'violet' | 'warning' | 'yellow';
/**
 * Text size options
 */
export type RichTextSize = 'm' | 's' | 'xs' | 'xxs';
/**
 * Chip resolver callback type
 */
export type ChipResolver = (tagName: string) => {
    icon?: string;
    color?: string;
} | undefined;
declare const richTextVariants: (props?: ({
    size?: "s" | "m" | "xs" | "xxs" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface RichTextProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>, VariantProps<typeof richTextVariants> {
    /**
     * Markdown-like text content to render
     */
    text: string;
    /**
     * Text size variant
     * @default 'm'
     */
    size?: RichTextSize;
    /**
     * Default color for chips
     */
    chipColor?: TagColor;
    /**
     * Default icon for chips
     */
    chipIcon?: string;
    /**
     * Resolver callback for chip properties based on tag name
     */
    chipResolver?: ChipResolver;
    /**
     * Callback when an element (link, chip, etc.) is clicked
     */
    onElementClick?: (e: React.MouseEvent, element: HTMLElement) => void;
}
/**
 * RichText component for rendering markdown-like formatted text.
 *
 * Supports:
 * - Bold (**text**)
 * - Italic (*text*)
 * - Strikethrough (~~text~~)
 * - Links [text](url)
 * - Code (`code`)
 * - Emoji (unicode)
 * - Chips/Tags ({{tagname}})
 * - Lists (- item or 1. item)
 *
 * @example
 * ```tsx
 * <RichText text="Hello **world**!" />
 * <RichText text="Visit [our site](https://example.com)" size="s" />
 * <RichText text="Status: {{pending}}" chipColor="warning" />
 * ```
 */
export declare const RichText: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<RichTextProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
