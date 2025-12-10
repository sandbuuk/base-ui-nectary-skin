import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentVanilla, NectaryComponentReact } from '../types'
import type { TSinchSize } from '../utils/size'

export type TSinchInputType = 'text' | 'password' | 'number'

export type TSinchInputClipboardEvent = CustomEvent<{ value: string, replaceWith: (value: string) => void }>

export type TSinchInputProps = {
  /** Identification for uncontrolled form submissions */
  name?: string,
  /** Controlled value, doesn't change on its own and requres an onChange-value state loop */
  value?: string,
  /** Mask */
  mask?: string | null,
  /** Label that is used for a11y – might be different from `label` */
  'aria-label': string,
  /** Text field type, `text` by default */
  type?: TSinchInputType,
  /** The HTML autocomplete attribute */
  autocomplete?: string | null,
  /** Text that appears in the text field when it has no value set */
  placeholder?: string,
  /** Invalid state */
  invalid?: boolean,
  /** Disabled */
  disabled?: boolean,
  /** Autofocus */
  autofocus?: boolean,
  /** Size, `m` by default */
  size?: TSinchSize,
  /** Whether or not the input is in readonly mode **/
  readonly?: boolean,
  /** Whether or not the input is required **/
  required?: boolean,
  /** Maximum length of the input value */
  maxlength?: number | null,
  /** Maximum numeric value for type 'number' */
  max?: number | null,
  /** Minimum numeric value for type 'number' */
  min?: number | null,
  /** Step value for type 'number' */
  step?: number | null,
  /** Enforce consistent font size across input types to avoid layout shifts when switching types between text and password. **/
  'enforce-consistent-font-size'?: boolean,
  selectionStart?: number | null,
  selectionEnd?: number | null,
  selectionDirection?: 'forward' | 'backward' | 'none' | null,
}

export type TSinchInputMethods = {
  setSelectionRange(selectionStart: number, selectionEnd: number): void,
}

export type TSinchInputEvents = {
  /** key-down handler*/
  '-key-down'?: (e: KeyboardEvent) => void,
  /** Change value handler */
  '-change'?: (e: CustomEvent<string>) => void,
  /** Focus handler */
  '-focus'?: (e: CustomEvent<void>) => void,
  /** Blur handler */
  '-blur'?: (e: CustomEvent<void>) => void,
  '-cut'?: (e: TSinchInputClipboardEvent) => void,
  '-copy'?: (e: TSinchInputClipboardEvent) => void,
  '-paste'?: (e: TSinchInputClipboardEvent) => void,
  '-wheel'?: (e: CustomEvent<void> & { target: NectaryComponentVanilla<'sinch-input'> }) => void,
}

export type TSinchInputStyle = {
  // Container Sizes
  '--sinch-comp-input-size-container-l'?: string,
  '--sinch-comp-input-size-container-m'?: string,
  '--sinch-comp-input-size-container-s'?: string,

  // Icon Sizes
  '--sinch-comp-input-size-icon-l'?: string,
  '--sinch-comp-input-size-icon-m'?: string,
  '--sinch-comp-input-size-icon-s'?: string,

  // Border Radius
  '--sinch-comp-input-shape-radius-size-l'?: string,
  '--sinch-comp-input-shape-radius-size-m'?: string,
  '--sinch-comp-input-shape-radius-size-s'?: string,

  // Font Properties
  '--sinch-comp-input-font-input'?: string,
  '--sinch-comp-input-font-placeholder'?: string,
  '--sinch-sys-font-body-monospace-m'?: string,

  // Default State Colors
  '--sinch-comp-input-color-default-background-initial'?: string,
  '--sinch-comp-input-color-default-text-initial'?: string,
  '--sinch-comp-input-color-default-text-placeholder'?: string,
  '--sinch-comp-input-color-default-border-initial'?: string,
  '--sinch-comp-input-color-default-border-focus'?: string,
  '--sinch-comp-input-color-default-icon-initial'?: string,

  // Disabled State Colors
  '--sinch-comp-input-color-disabled-text-initial'?: string,
  '--sinch-comp-input-color-disabled-border-initial'?: string,
  '--sinch-comp-input-color-disabled-icon-initial'?: string,

  // Invalid State Colors
  '--sinch-comp-input-color-invalid-border-initial'?: string,

  // Global Properties
  '--sinch-global-size-icon'?: string,
  '--sinch-global-color-icon'?: string,
}

export type TSinchInput = {
  props: TSinchInputProps,
  methods: TSinchInputMethods,
  events: TSinchInputEvents,
  style: TSinchInputStyle,
}

export type TSinchInputElement = NectaryComponentVanillaByType<TSinchInput>
export type TSinchInputReact = NectaryComponentReactByType<TSinchInput>

declare global {
  interface NectaryComponentMap {
    'sinch-input': TSinchInput,
  }

  interface HTMLElementTagNameMap {
    'sinch-input': NectaryComponentVanilla<'sinch-input'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-input': NectaryComponentReact<'sinch-input'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-input': NectaryComponentReact<'sinch-input'>,
    }
  }
}
