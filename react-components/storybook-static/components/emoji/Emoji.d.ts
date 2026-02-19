import { VariantProps } from 'class-variance-authority';

declare const emojiVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface EmojiProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>, VariantProps<typeof emojiVariants> {
    /** Emoji character to display */
    char: string;
    /** Base URL for emoji images. Use %s as placeholder for the codepoint */
    baseUrl?: string;
    /** Vertical alignment of the emoji image */
    verticalAlign?: React.CSSProperties['verticalAlign'];
    /** Custom size in pixels (overrides size variant) */
    customSize?: number;
}
export declare const Emoji: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<EmojiProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLSpanElement>>;
export {};
