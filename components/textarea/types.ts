import type { TSinchElementReact } from '../types'

export type TSinchTextareaElement = HTMLElement & {
  /** Value */
  value: string,
  /** Text that appears in the text field when it has no value set */
  placeholder: string | null,
  /** Disabled */
  disabled: boolean,
  /** Invalid state */
  invalid: boolean,
  selectionStart: HTMLTextAreaElement['selectionStart'],
  selectionEnd: HTMLTextAreaElement['selectionEnd'],
  selectionDirection: HTMLTextAreaElement['selectionDirection'],
  /** Number of rows */
  rows: HTMLTextAreaElement['rows'],
  minRows: HTMLTextAreaElement['rows'],
  /** Whether the text field is resizable */
  resizable: boolean,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Text that appears in the text field when it has no value set */
  setAttribute(name: 'placeholder', value: string): void,
  /** Invalid state */
  setAttribute(name: 'invalid', value: ''): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
  /** Number of rows */
  setAttribute(name: 'rows', value: string): void,
  setAttribute(name: 'minrows', value: string): void,
  /** Whether the text field is resizable */
  setAttribute(name: 'resizable', value: ''): void,
}

export type TSinchTextareaReact = TSinchElementReact<TSinchTextareaElement> & {
  /** Value */
  value: string,
  /** Text that appears in the text field when it has no value set */
  placeholder?: string,
  /** Disabled */
  disabled?: boolean,
  /** Invalid state */
  invalid?: boolean,
  'aria-label': string,
  /** Number of rows */
  rows?: number,
  minRows?: number,
  /** Whether the text field is resizable */
  resizable?: boolean,
  /** Change value handler */
  'on-change'?: (e: CustomEvent<string>) => void,
  /** Focus handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
} & {
  style?: {
    // Shape
    '--sinch-comp-textarea-shape-radius'?: string,

    // Font
    '--sinch-comp-textarea-font-input'?: string,

    // Sizes
    '--sinch-comp-textarea-size-resize-handle'?: string,

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
  },
}
