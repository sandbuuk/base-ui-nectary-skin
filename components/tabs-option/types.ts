import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchTabsOptionProps = {
  /** Value */
  value: string,
  /** Text */
  text: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Disabled */
  disabled?: boolean,
}

export type TSinchTabsOptionStyle = {
  // Font
  '--sinch-comp-tab-font-label'?: string,

  // Size
  '--sinch-comp-tab-size-icon'?: string,

  // Shape
  '--sinch-comp-tab-shape-radius'?: string,

  // Colors - Default State
  '--sinch-comp-tab-color-default-background-initial'?: string,
  '--sinch-comp-tab-color-default-background-hover'?: string,
  '--sinch-comp-tab-color-default-text-initial'?: string,
  '--sinch-comp-tab-color-default-icon-initial'?: string,
  '--sinch-comp-tab-color-default-outline-focus'?: string,

  // Colors - Checked State
  '--sinch-comp-tab-color-checked-text-initial'?: string,
  '--sinch-comp-tab-color-checked-icon-initial'?: string,
  '--sinch-comp-tab-color-checked-border-initial'?: string,

  // Colors - Disabled State
  '--sinch-comp-tab-color-disabled-text-initial'?: string,
  '--sinch-comp-tab-color-disabled-icon-initial'?: string,

  // Global Properties
  '--sinch-global-color-text'?: string,
  '--sinch-global-color-icon'?: string,
  '--sinch-global-size-icon'?: string,
}

export type TSinchTabsOption = {
  props: TSinchTabsOptionProps,
  style: TSinchTabsOptionStyle,
}

export type TSinchTabsOptionElement = NectaryComponentVanillaByType<TSinchTabsOption>
export type TSinchTabsOptionReact = NectaryComponentReactByType<TSinchTabsOption>
