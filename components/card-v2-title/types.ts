import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchOrientation = 'horizontal' | 'vertical'

export type TSinchCardTitleProps = {
  /** Text */
  text: string,
  /**
  * Orientation relative to the icon slot
  * @default "horizontal"
  */
  orientation?: TSinchOrientation,
  /** Cuts the long text with “…” ellipsis */
  ellipsis?: boolean,
}

export type TSinchCardTitleStyle = {
  // Font
  '--sinch-comp-card-v2-font-title'?: string,

  // Colors - Default State
  '--sinch-comp-card-v2-color-default-title-initial'?: string,
  '--sinch-comp-card-v2-color-default-title-disabled'?: string,
  '--sinch-comp-card-v2-color-default-icon-initial'?: string,
  '--sinch-comp-card-v2-color-default-icon-disabled'?: string,

  // Colors - Selected State
  '--sinch-comp-card-v2-color-selected-title-disabled'?: string,
  '--sinch-comp-card-v2-color-selected-icon-initial'?: string,
  '--sinch-comp-card-v2-color-selected-icon-disabled'?: string,

  // Sizes
  '--sinch-comp-card-v2-size-icon'?: string,

  // Global Properties
  '--sinch-global-color-icon'?: string,
  '--sinch-global-size-icon'?: string,
}

export type TSinchCardTitle = {
  props: TSinchCardTitleProps,
  style: TSinchCardTitleStyle,
}

export type TSinchCardTitleElement = NectaryComponentVanillaByType<TSinchCardTitle>
export type TSinchCardTitleReact = NectaryComponentReactByType<TSinchCardTitle>
