import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchColorMenuOptionProps = {
  /** Value */
  value: string,
}

export type TSinchColorMenuOptionStyle = {
  // Colors - Default State
  '--sinch-comp-color-menu-option-color-default-border-initial'?: string,
  '--sinch-comp-color-menu-option-color-default-border-selected'?: string,
  '--sinch-comp-color-menu-option-color-default-border-focus'?: string,
  '--sinch-comp-color-menu-option-color-default-border-hover'?: string,
  '--sinch-comp-color-menu-option-color-default-border-active'?: string,
}

export type TSinchColorMenuOption = {
  props: TSinchColorMenuOptionProps,
  style: TSinchColorMenuOptionStyle,
}

export type TSinchColorMenuOptionElement = NectaryComponentVanillaByType<TSinchColorMenuOption>
export type TSinchColorMenuOptionReact = NectaryComponentReactByType<TSinchColorMenuOption>
