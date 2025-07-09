import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchRadioOptionProps =
  | ({
    value: string,
    checked?: boolean,
    disabled?: boolean,
    text?: string,
    'aria-label': string,
    'aria-labelledby'?: never,
  })
  | ({
    value: string,
    checked?: boolean,
    disabled?: boolean,
    text?: string,
    'aria-label'?: never,
    'aria-labelledby': string,
  })

export type TSinchRadioOptionStyle = {
  // Colors - Default State
  '--sinch-comp-radio-color-default-background-initial'?: string,
  '--sinch-comp-radio-color-default-background-hover'?: string,
  '--sinch-comp-radio-color-default-background-active'?: string,
  '--sinch-comp-radio-color-default-border-initial'?: string,
  '--sinch-comp-radio-color-default-border-hover'?: string,
  '--sinch-comp-radio-color-default-border-active'?: string,
  '--sinch-comp-radio-color-default-label-initial'?: string,
  '--sinch-comp-radio-color-default-outline-focus'?: string,

  // Colors - Checked State
  '--sinch-comp-radio-color-checked-border-initial'?: string,
  '--sinch-comp-radio-color-checked-border-hover'?: string,
  '--sinch-comp-radio-color-checked-border-active'?: string,
  '--sinch-comp-radio-color-checked-knob-initial'?: string,
  '--sinch-comp-radio-color-checked-knob-hover'?: string,
  '--sinch-comp-radio-color-checked-knob-active'?: string,

  // Colors - Invalid State
  '--sinch-comp-radio-color-invalid-border-initial'?: string,
  '--sinch-comp-radio-color-invalid-border-hover'?: string,
  '--sinch-comp-radio-color-invalid-border-active'?: string,
  '--sinch-comp-radio-color-invalid-label-initial'?: string,

  // Colors - Disabled State
  '--sinch-comp-radio-color-disabled-background-initial'?: string,
  '--sinch-comp-radio-color-disabled-border-initial'?: string,
  '--sinch-comp-radio-color-disabled-label-initial'?: string,

  // Colors - Checked Disabled State
  '--sinch-comp-radio-color-checked-disabled-border-initial'?: string,
  '--sinch-comp-radio-color-checked-disabled-knob-initial'?: string,
  '--sinch-comp-radio-color-checked-disabled-label-initial'?: string,

  // Font
  '--sinch-comp-radio-font-label'?: string,
}

export type TSinchRadioOption = {
  props: TSinchRadioOptionProps,
  style: TSinchRadioOptionStyle,
}

export type TSinchRadioOptionElement = NectaryComponentVanillaByType<TSinchRadioOption>
export type TSinchRadioOptionReact = NectaryComponentReactByType<TSinchRadioOption>
