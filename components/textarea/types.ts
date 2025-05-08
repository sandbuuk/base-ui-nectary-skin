import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchTextareaProps = {
  /** Identification for uncontrolled form submissions */
  name?: string,
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
  selectionStart?: number,
  selectionEnd?: number,
  selectionDirection?: 'forward' | 'backward' | 'none',
}

export type TSinchTextareaEvents = {
  /** Change value handler */
  '-change'?: (e: CustomEvent<string>) => void,
  /** Focus handler */
  '-focus'?: (e: CustomEvent<void>) => void,
  /** Blur handler */
  '-blur'?: (e: CustomEvent<void>) => void,
}

export type TSinchTextareaStyle = {
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
}

export type TSinchTextarea = {
  props: TSinchTextareaProps,
  events: TSinchTextareaEvents,
  style: TSinchTextareaStyle,
}

export type TSinchTextareaElement = NectaryComponentVanillaByType<TSinchTextarea>
export type TSinchTextareaReact = NectaryComponentReactByType<TSinchTextarea>
