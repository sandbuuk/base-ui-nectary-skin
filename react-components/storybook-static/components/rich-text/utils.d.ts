/**
 * Rich text node types
 */
export type RichTextNodeType = 'text' | 'bold' | 'italic' | 'strikethrough' | 'code' | 'link' | 'chip' | 'emoji' | 'linebreak' | 'paragraph' | 'list' | 'listItem';
/**
 * Rich text node structure
 */
export interface RichTextNode {
    type: RichTextNodeType;
    content?: string;
    children?: RichTextNode[];
    href?: string;
    external?: boolean;
    ordered?: boolean;
}
/**
 * Simple markdown-like parser for rich text
 *
 * Supports:
 * - **bold**
 * - *italic*
 * - ~~strikethrough~~
 * - `code`
 * - [link](url)
 * - {{chip}}
 * - Emojis (unicode detection)
 * - Line breaks
 * - Lists (- item, 1. item)
 */
export declare function parseRichText(text: string): RichTextNode[];
