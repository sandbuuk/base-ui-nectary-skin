import type { TSinchTagColor } from '../tag/colors'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TRichTextareaSelection = {
  italic: boolean,
  bold: boolean,
  strikethrough: boolean,
  codetag: boolean,
  tag: boolean,
  link: boolean,
  ulist: boolean,
  olist: boolean,
}

export type TSinchRichTextareaProps = {
  /** Value */
  value: string,
  /** Text that appears in the text field when it has no value set */
  placeholder?: string,
  /** Color for chips/tags using the tag color system */
  'chip-color'?: TSinchTagColor,
  'aria-label': string,
}

export type TSinchRichTextareaMethods = {
  insertText(value: string): void,
  insertLink(text: string, href: string): void,
  insertMention(username: string): void,
  formatItalic(): void,
  formatBold(): void,
  formatStrikethrough(): void,
  formatCodeTag(): void,
  formatOrderedList(): void,
  formatUnorderedList(): void,
}

export type TSinchRichTextareaEvents = {
  /** Change value handler */
  '-change'?: (e: CustomEvent<string>) => void,
  /** Focus handler */
  '-focus'?: (e: CustomEvent<void>) => void,
  /** Blur handler */
  '-blur'?: (e: CustomEvent<void>) => void,
}

export type TSinchRichTextareaStyle = {
  // Shape
  '--sinch-comp-textarea-shape-radius'?: string,
  '--sinch-comp-code-tag-shape-radius'?: string,

  // Colors - Default State
  '--sinch-comp-textarea-color-default-background-initial'?: string,
  '--sinch-comp-textarea-color-default-text-initial'?: string,
  '--sinch-comp-textarea-color-default-text-placeholder'?: string,
  '--sinch-comp-textarea-color-default-border-initial'?: string,
  '--sinch-comp-textarea-color-default-border-focus'?: string,

  // Colors - Invalid State
  '--sinch-comp-textarea-color-invalid-border-initial'?: string,

  // Colors - Disabled State
  '--sinch-comp-textarea-color-disabled-text-initial'?: string,
  '--sinch-comp-textarea-color-disabled-border-initial'?: string,

  // Colors - Code
  '--sinch-comp-code-tag-color-default-text-initial'?: string,
  '--sinch-comp-code-tag-color-default-border-initial'?: string,
  '--sinch-comp-code-tag-color-default-background-initial'?: string,

  // Colors - Link
  '--sinch-comp-link-color-default-text-initial'?: string,

  // Fonts
  '--sinch-comp-textarea-font-input'?: string,
  '--sinch-comp-code-tag-font-text'?: string,
  '--sinch-comp-link-default-font-initial'?: string,
}

export type TSinchRichTextarea = {
  props: TSinchRichTextareaProps,
  methods: TSinchRichTextareaMethods,
  events: TSinchRichTextareaEvents,
  style: TSinchRichTextareaStyle,
}

export type TSinchRichTextareaElement = NectaryComponentVanillaByType<TSinchRichTextarea>
export type TSinchRichTextareaReact = NectaryComponentReactByType<TSinchRichTextarea>

declare global {
  interface NectaryComponentMap {
    'sinch-rich-textarea': TSinchRichTextarea,
  }

  interface HTMLElementTagNameMap {
    'sinch-rich-textarea': NectaryComponentVanilla<'sinch-rich-textarea'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-rich-textarea': NectaryComponentReact<'sinch-rich-textarea'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-rich-textarea': NectaryComponentReact<'sinch-rich-textarea'>,
    }
  }
}
