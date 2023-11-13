import type { TSinchElementReact } from '../types'

export type TRichTextareaSelection = {
  italic: boolean,
  bold: boolean,
  strikethrough: boolean,
  codetag: boolean,
  link: boolean,
  ulist: boolean,
  olist: boolean,
}

export type TSinchRichTextareaElement = HTMLElement & {
  /** Value */
  value: string,
  /** Text that appears in the text field when it has no value set */
  placeholder: string | null,
  insertText(value: string): void,
  insertLink(text: string, href: string): void,
  formatItalic(): void,
  formatBold(): void,
  formatStrikethrough(): void,
  formatCodeTag(): void,
  formatOrderedList(): void,
  formatUnorderedList(): void,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  addEventListener(type: '-selection', listener: (e: CustomEvent<TRichTextareaSelection>) => void): void,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Text that appears in the text field when it has no value set */
  setAttribute(name: 'placeholder', value: string): void,
}

export type TSinchRichTextareaReact = TSinchElementReact<TSinchRichTextareaElement> & {
  /** Value */
  value: string,
  /** Text that appears in the text field when it has no value set */
  placeholder?: string,
  'aria-label': string,
  /** Change value handler */
  'on-change'?: (e: CustomEvent<string>) => void,
  /** Focus handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
}
