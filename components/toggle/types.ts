import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchToggleProps = {
  checked?: boolean,
  small?: boolean,
  labeled?: boolean,
  disabled?: boolean,
  text?: string,
  'aria-label': string,
}

export type TSinchToggleEvents = {
  '-change'?: (e: CustomEvent<boolean>) => void,
}

export type TSinchToggleStyle = {
  // Size Variants
  '--sinch-local-size'?: string,

  // Default State Colors
  '--sinch-comp-toggle-color-default-background-initial'?: string,
  '--sinch-comp-toggle-color-default-knob-background-initial'?: string,
  '--sinch-comp-toggle-color-default-text-inside-initial'?: string,
  '--sinch-comp-toggle-color-default-outline-focus'?: string,
  '--sinch-comp-toggle-color-default-label-initial'?: string,

  // Checked State Colors
  '--sinch-comp-toggle-color-checked-background-initial'?: string,

  // Disabled State Colors
  '--sinch-comp-toggle-color-disabled-background-initial'?: string,
  '--sinch-comp-toggle-color-disabled-label-initial'?: string,

  // Checked Disabled State Colors
  '--sinch-comp-toggle-color-checked-disabled-background-initial'?: string,

  // Shadow Properties
  '--sinch-comp-toggle-shadow-knob-default'?: string,
  '--sinch-comp-toggle-shadow-knob-disabled'?: string,

  // Font Properties
  '--sinch-comp-toggle-font-size-m-inside-text'?: string,
  '--sinch-comp-toggle-font-size-m-label'?: string,
  '--sinch-comp-toggle-font-size-s-label'?: string,
}

export type TSinchToggle = {
  props: TSinchToggleProps,
  events: TSinchToggleEvents,
  style: TSinchToggleStyle,
}

export type TSinchToggleElement = NectaryComponentVanillaByType<TSinchToggle>
export type TSinchToggleReact = NectaryComponentReactByType<TSinchToggle>
