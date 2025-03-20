import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchFieldProps = {
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
}

export type TSinchFieldStyle = {
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
}

export type TSinchField = {
  props: TSinchFieldProps,
  style: TSinchFieldStyle,
}

export type TSinchFieldElement = NectaryComponentVanillaByType<TSinchField>
export type TSinchFieldReact = NectaryComponentReactByType<TSinchField>
