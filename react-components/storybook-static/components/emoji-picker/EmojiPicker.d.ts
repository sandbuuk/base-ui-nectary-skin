import { VariantProps } from 'class-variance-authority';

/**
 * EmojiPicker - A component for selecting emojis with category navigation,
 * search functionality, and skin tone selection.
 */
export interface EmojiData {
    emoji: string;
    code?: string;
    label: string;
    skins?: EmojiData[];
    tone: number | number[];
}
export interface EmojiGroup {
    name: string;
    emojis: EmojiData[];
}
declare const emojiPickerVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface EmojiPickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof emojiPickerVariants> {
    /**
     * Base URL for emoji images. Use %s as placeholder for the codepoint.
     */
    emojiBaseUrl?: string;
    /**
     * Callback when an emoji is selected
     */
    onChange?: (emoji: string) => void;
}
export declare const EmojiPicker: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<EmojiPickerProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
