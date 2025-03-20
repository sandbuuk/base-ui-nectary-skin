import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchActionMenuOptionProps = {
  /** Display text */
  text: string,
  /** Disabled state */
  disabled?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
}

export type TSinchActionMenuOptionEvents = {
  /** Click event handler */
  '-click'?: (e: CustomEvent<void>) => void,
}

export type TSinchActionMenuOptionStyle = {
  // Colors - Default State
  '--sinch-comp-action-menu-color-default-background-initial'?: string,
  '--sinch-comp-action-menu-color-default-background-selected'?: string,
  '--sinch-comp-action-menu-color-default-background-hover'?: string,
  '--sinch-comp-action-menu-color-default-text-initial'?: string,
  '--sinch-comp-action-menu-color-default-icon-initial'?: string,

  // Colors - Disabled State
  '--sinch-comp-action-menu-color-disabled-background-initial'?: string,
  '--sinch-comp-action-menu-color-disabled-text-initial'?: string,
  '--sinch-comp-action-menu-color-disabled-icon-initial'?: string,

  // Fonts
  '--sinch-comp-action-menu-font-option'?: string,

  // Sizes
  '--sinch-comp-action-menu-size-icon'?: string,

  // Global Properties
  '--sinch-global-color-text'?: string,
  '--sinch-global-color-icon'?: string,
  '--sinch-global-size-icon'?: string,
  '--sinch-comp-text-font'?: string,
}

export type TSinchActionMenuOption = {
  props: TSinchActionMenuOptionProps,
  events: TSinchActionMenuOptionEvents,
  style: TSinchActionMenuOptionStyle,
}

export type TSinchActionMenuOptionElement = NectaryComponentVanillaByType<TSinchActionMenuOption>
export type TSinchActionMenuOptionReact = NectaryComponentReactByType<TSinchActionMenuOption>
