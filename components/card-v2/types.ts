import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchCardV2Props = {
  /** Disabled */
  disabled?: boolean,
  /** Selected */
  selected?: boolean,
  /** Clickable
   * @default true if a click event is provided.
   */
  clickable?: boolean,
}

export type TSinchCardV2Events = {
  /** Click even handler */
  '-click'?: (e: CustomEvent<void>) => void,
}

export type TSinchCardV2Style = {
  // Shape
  '--sinch-comp-card-v2-shape-radius'?: string,

  // Shadows
  '--sinch-comp-card-v2-shadow-initial'?: string,
  '--sinch-comp-card-v2-shadow-hover'?: string,
  '--sinch-comp-card-v2-shadow-disabled'?: string,
  '--sinch-comp-card-v2-shadow-active'?: string,

  // Fonts
  '--sinch-comp-card-v2-font-title'?: string,
  '--sinch-comp-card-v2-font-description'?: string,

  // Colors - Default State
  '--sinch-comp-card-v2-color-default-border-initial'?: string,
  '--sinch-comp-card-v2-color-default-border-hover'?: string,
  '--sinch-comp-card-v2-color-default-border-disabled'?: string,
  '--sinch-comp-card-v2-color-default-border-active'?: string,
  '--sinch-comp-card-v2-color-default-background-initial'?: string,
  '--sinch-comp-card-v2-color-default-background-hover'?: string,
  '--sinch-comp-card-v2-color-default-background-disabled'?: string,
  '--sinch-comp-card-v2-color-default-background-active'?: string,
  '--sinch-comp-card-v2-color-default-description-initial'?: string,
  '--sinch-comp-card-v2-color-default-description-disabled'?: string,

  // Colors - Selected State
  '--sinch-comp-card-v2-color-selected-border-initial'?: string,
  '--sinch-comp-card-v2-color-selected-border-hover'?: string,
  '--sinch-comp-card-v2-color-selected-border-disabled'?: string,
  '--sinch-comp-card-v2-color-selected-border-active'?: string,
  '--sinch-comp-card-v2-color-selected-background-initial'?: string,
  '--sinch-comp-card-v2-color-selected-background-hover'?: string,
  '--sinch-comp-card-v2-color-selected-background-disabled'?: string,
  '--sinch-comp-card-v2-color-selected-background-active'?: string,
  '--sinch-comp-card-v2-color-selected-description-initial'?: string,
  '--sinch-comp-card-v2-color-selected-description-disabled'?: string,
}

export type TSinchCardV2 = {
  props: TSinchCardV2Props,
  events: TSinchCardV2Events,
  style: TSinchCardV2Style,
}

export type TSinchCardV2Element = NectaryComponentVanillaByType<TSinchCardV2>
export type TSinchCardV2React = NectaryComponentReactByType<TSinchCardV2>
