import { VariantProps } from 'class-variance-authority';
import { TagColor, ChipResolver } from './RichText';

/**
 * Selection state information
 */
export interface RichTextareaSelection {
    italic: boolean;
    bold: boolean;
    strikethrough: boolean;
    codetag: boolean;
    tag: boolean;
    link: boolean;
    ulist: boolean;
    olist: boolean;
}
/**
 * Methods exposed via ref
 */
export interface RichTextareaRef {
    focus: () => void;
    blur: () => void;
    insertText: (value: string) => void;
    insertLink: (text: string, href: string) => void;
    insertChip: (name: string) => void;
    formatBold: () => void;
    formatItalic: () => void;
    formatStrikethrough: () => void;
    formatCodeTag: () => void;
    formatOrderedList: () => void;
    formatUnorderedList: () => void;
    getCaretRect: () => DOMRect | null;
}
declare const wrapperVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface RichTextareaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof wrapperVariants> {
    /**
     * Controlled value (markdown text)
     */
    value?: string;
    /**
     * Default value for uncontrolled usage
     */
    defaultValue?: string;
    /**
     * Placeholder text
     */
    placeholder?: string;
    /**
     * Invalid/error state
     * @default false
     */
    invalid?: boolean;
    /**
     * Disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * Number of visible rows
     */
    rows?: number;
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
     * Accessible label
     */
    'aria-label'?: string;
    /**
     * Content displayed in the top slot
     */
    topContent?: React.ReactNode;
    /**
     * Content displayed in the bottom slot
     */
    bottomContent?: React.ReactNode;
    /**
     * Change handler - receives the new markdown value
     */
    onChange?: (value: string) => void;
    /**
     * Focus handler
     */
    onFocus?: () => void;
    /**
     * Blur handler
     */
    onBlur?: () => void;
    /**
     * Selection change handler
     */
    onSelectionChange?: (selection: RichTextareaSelection) => void;
}
/**
 * RichTextarea component for editing rich text with formatting support.
 *
 * Features:
 * - contentEditable-based editing
 * - Keyboard shortcuts (Cmd/Ctrl+B for bold, Cmd/Ctrl+I for italic)
 * - Markdown output format
 * - Chip/tag insertion
 * - Link insertion
 *
 * @example
 * ```tsx
 * <RichTextarea
 *   value={text}
 *   onChange={setText}
 *   placeholder="Type something..."
 * />
 * ```
 */
export declare const RichTextarea: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<RichTextareaProps & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<RichTextareaRef>>;
export {};
