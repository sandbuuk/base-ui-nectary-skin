import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchSelectMenuOptionProps = {
  /** Value */
  value: string,
  /** Display text */
  text: string,
  /** Disabled state */
  disabled?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
}

export type TSinchSelectMenuOptionMethods = {
  matchesSearch(value: string): boolean,
}

export type TSinchSelectMenuOptionStyle = {
  // Icon
  '--sinch-comp-select-menu-size-icon'?: string,

  // Font
  '--sinch-comp-select-menu-font-option'?: string,

  // Colors - Default State
  '--sinch-comp-select-menu-color-default-background-initial'?: string,
  '--sinch-comp-select-menu-color-default-background-selected'?: string,
  '--sinch-comp-select-menu-color-default-background-hover'?: string,
  '--sinch-comp-select-menu-color-default-option-initial'?: string,
  '--sinch-comp-select-menu-color-default-icon-initial'?: string,

  // Colors - Disabled State
  '--sinch-comp-select-menu-color-disabled-background-initial'?: string,
  '--sinch-comp-select-menu-color-disabled-option-initial'?: string,
  '--sinch-comp-select-menu-color-disabled-icon-initial'?: string,

  // Global Properties
  '--sinch-global-color-text'?: string,
  '--sinch-global-color-icon'?: string,
  '--sinch-global-size-icon'?: string,
}

export type TSinchSelectMenuOption = {
  props: TSinchSelectMenuOptionProps,
  methods: TSinchSelectMenuOptionMethods,
  style: TSinchSelectMenuOptionStyle,
}

export type TSinchSelectMenuOptionElement = NectaryComponentVanillaByType<TSinchSelectMenuOption>
export type TSinchSelectMenuOptionReact = NectaryComponentReactByType<TSinchSelectMenuOption>
