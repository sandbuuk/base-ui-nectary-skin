import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchTileControlOptionProps = {
  /** Value */
  value: string,
  /** Text content */
  text: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Disabled */
  disabled?: boolean,
}

export type TSinchTileControlOptionEvents = {
  /** Focus handler */
  '-focus'?: (e: CustomEvent<void>) => void,
  /** Blur handler */
  '-blur'?: (e: CustomEvent<void>) => void,
}

export type TSinchTileControlOptionStyle = {
  // Shape
  '--sinch-comp-tile-control-shape-radius-l'?: string,
  '--sinch-comp-tile-control-shape-radius-s'?: string,

  // Font
  '--sinch-comp-tile-control-font-label'?: string,

  // Sizes
  '--sinch-comp-tile-control-size-m-icon'?: string,
  '--sinch-comp-tile-control-size-s-icon'?: string,

  // Colors - Default State
  '--sinch-comp-tile-control-color-default-background-initial'?: string,
  '--sinch-comp-tile-control-color-default-border-initial'?: string,
  '--sinch-comp-tile-control-color-default-text-initial'?: string,
  '--sinch-comp-tile-control-color-default-icon-initial'?: string,
  '--sinch-comp-tile-control-color-default-background-hover'?: string,
  '--sinch-comp-tile-control-color-default-border-hover'?: string,
  '--sinch-comp-tile-control-color-default-outline-focus'?: string,

  // Colors - Checked State
  '--sinch-comp-tile-control-color-checked-background-initial'?: string,
  '--sinch-comp-tile-control-color-checked-border-initial'?: string,
  '--sinch-comp-tile-control-color-checked-text-initial'?: string,
  '--sinch-comp-tile-control-color-checked-icon-initial'?: string,

  // Colors - Disabled State
  '--sinch-comp-tile-control-color-disabled-background-initial'?: string,
  '--sinch-comp-tile-control-color-disabled-border-initial'?: string,
  '--sinch-comp-tile-control-color-disabled-text-initial'?: string,
  '--sinch-comp-tile-control-color-disabled-icon-initial'?: string,

  // Shadows
  '--sinch-comp-tile-control-shadow-initial'?: string,
  '--sinch-comp-tile-control-shadow-hover'?: string,
  '--sinch-comp-tile-control-shadow-active'?: string,
  '--sinch-comp-tile-control-shadow-disabled'?: string,

  // Global Properties
  '--sinch-global-size-icon'?: string,
  '--sinch-global-color-icon'?: string,
}

export type TSinchTileControlOption = {
  props: TSinchTileControlOptionProps,
  events: TSinchTileControlOptionEvents,
  style: TSinchTileControlOptionStyle,
}

export type TSinchTileControlOptionElement = NectaryComponentVanillaByType<TSinchTileControlOption>
export type TSinchTileControlOptionReact = NectaryComponentReactByType<TSinchTileControlOption>
