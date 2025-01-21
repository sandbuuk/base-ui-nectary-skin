import type { TSinchElementReact } from '../types'

export type TSinchFieldElement = HTMLElement & {
  /** Label */
  label: string | null,
  /** Optional text */
  optionalText: string | null,
  /** Additional text */
  additionalText: string | null,
  /** Invalid text, controls the overall invalid state of the text field */
  invalidText: string | null,
  /** Disabled */
  disabled: boolean,
  /** Label */
  setAttribute(name: 'label', value: string): void,
  /** Optional text */
  setAttribute(name: 'optionaltext', value: string): void,
  /** Additional text */
  setAttribute(name: 'additionaltext', value: string): void,
  /** Invalid text, controls the overall invalid state of the text field */
  setAttribute(name: 'invalidtext', value: string): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchFieldReact = TSinchElementReact<TSinchFieldElement> & {
  /** Label that shows in UI */
  label?: string,
  /** Optional text */
  optionalText?: string,
  /** Additional text */
  additionalText?: string,
  /** Invalid text, controls the overall invalid state of the text field */
  invalidText?: string,
  /** Disabled */
  disabled?: boolean,
} & {
  style?: {
    // Fonts
    '--sinch-comp-field-font-label'?: string,
    '--sinch-comp-field-font-optional'?: string,
    '--sinch-comp-field-font-additional'?: string,
    '--sinch-comp-field-font-invalid'?: string,

    // Colors - Default State
    '--sinch-comp-field-color-default-label-initial'?: string,
    '--sinch-comp-field-color-default-optional-initial'?: string,
    '--sinch-comp-field-color-default-additional-initial'?: string,

    // Colors - Disabled State
    '--sinch-comp-field-color-disabled-label-initial'?: string,
    '--sinch-comp-field-color-disabled-optional-initial'?: string,
    '--sinch-comp-field-color-disabled-additional-initial'?: string,

    // Colors - Invalid State
    '--sinch-comp-field-color-invalid-text-initial'?: string,
  },
}
