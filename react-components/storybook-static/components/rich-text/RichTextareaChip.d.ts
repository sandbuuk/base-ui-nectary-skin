import { VariantProps } from 'class-variance-authority';
import { TagColor } from './RichText';

declare const chipVariants: (props?: ({
    readonly?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface RichTextareaChipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>, VariantProps<typeof chipVariants> {
    /**
     * Text content for the chip
     */
    text: string;
    /**
     * Whether the chip is readonly (hides the close button)
     * @default false
     */
    readonly?: boolean;
    /**
     * Color using the tag color system
     */
    color?: TagColor;
    /**
     * Icon name (displayed before text)
     */
    icon?: React.ReactNode;
    /**
     * Called when the chip is clicked
     */
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
    /**
     * Called when the close button is clicked
     */
    onRemove?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}
/**
 * RichTextareaChip component for displaying chips within rich text editors.
 *
 * Used internally by RichTextarea but can also be used standalone.
 * Supports custom colors, icons, and a remove button.
 *
 * @example
 * ```tsx
 * <RichTextareaChip text="username" />
 * <RichTextareaChip text="status" color="success" readonly />
 * <RichTextareaChip text="tag" onRemove={handleRemove} />
 * ```
 */
export declare const RichTextareaChip: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<RichTextareaChipProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLSpanElement>>;
export {};
