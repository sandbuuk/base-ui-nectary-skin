import type { TSinchElementReact } from '../types'
import type { TSinchSize } from '../utils/size'

export type TSinchSelectButtonElement = HTMLElement & {
  /** Text */
  text: string,
  /** Text that appears in the text field when it has no text set */
  placeholder: string,
  /** Invalid state */
  invalid: boolean,
  /** Disabled */
  disabled: boolean,
  /** Size, `m` by default */
  size: TSinchSize,
  /** Click event */
  addEventListener(type: '-click', listener: (e: CustomEvent<void>) => void): void,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Text that appears in the text field when it has no value set */
  setAttribute(name: 'placeholder', value: string): void,
  /** Invalid state */
  setAttribute(name: 'invalid', value: ''): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
  /** Size, `m` by default */
  setAttribute(name: 'size', value: TSinchSize): void,
}

export type TSinchSelectButtonReact = TSinchElementReact<TSinchSelectButtonElement> & {
  /** Text */
  text: string,
  /** Label that is used for a11y` */
  'aria-label': string,
  /** Text that appears in the text field when it has no text set */
  placeholder: string,
  /** Invalid state */
  invalid?: boolean,
  /** Disabled */
  disabled?: boolean,
  /** Size, `m` by default */
  size?: TSinchSize,
  /** Click handler */
  'on-click': (e: CustomEvent<void>) => void,
  /** Focus handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
} & {
  style?: {
    // Sizes - L
    '--sinch-comp-select-button-size-container-l'?: string,
    '--sinch-comp-select-button-size-icon-l'?: string,
    '--sinch-comp-select-button-shape-radius-size-l'?: string,

    // Sizes - M
    '--sinch-comp-select-button-size-container-m'?: string,
    '--sinch-comp-select-button-size-icon-m'?: string,
    '--sinch-comp-select-button-shape-radius-size-m'?: string,

    // Sizes - S
    '--sinch-comp-select-button-size-container-s'?: string,
    '--sinch-comp-select-button-size-icon-s'?: string,
    '--sinch-comp-select-button-shape-radius-size-s'?: string,

    // Colors - Default State
    '--sinch-comp-select-button-color-default-background-initial'?: string,
    '--sinch-comp-select-button-color-default-icon-initial'?: string,
    '--sinch-comp-select-button-color-default-text-initial'?: string,
    '--sinch-comp-select-button-color-default-placeholder-initial'?: string,
    '--sinch-comp-select-button-color-default-border-initial'?: string,
    '--sinch-comp-select-button-color-default-border-focus'?: string,

    // Colors - Invalid State
    '--sinch-comp-select-button-color-invalid-border-initial'?: string,

    // Colors - Disabled State
    '--sinch-comp-select-button-color-disabled-icon-initial'?: string,
    '--sinch-comp-select-button-color-disabled-text-initial'?: string,
    '--sinch-comp-select-button-color-disabled-placeholder-initial'?: string,
    '--sinch-comp-select-button-color-disabled-border-initial'?: string,

    // Fonts
    '--sinch-comp-select-button-font-input'?: string,
    '--sinch-comp-select-button-font-placeholder'?: string,
  },
}
