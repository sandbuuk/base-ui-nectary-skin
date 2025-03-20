import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchColorSwatchProps = {
  /** Color name */
  name?: string,
}

export type TSinchColorSwatchStyle = {
  // Global Properties
  '--sinch-global-size-icon'?: string,

  // Reference Colors
  '--sinch-ref-color-violet-200'?: string,
  '--sinch-ref-color-honey-200'?: string,
  '--sinch-ref-color-grass-200'?: string,
  '--sinch-ref-color-ocean-200'?: string,
}

export type TSinchColorSwatch = {
  props: TSinchColorSwatchProps,
  style: TSinchColorSwatchStyle,
}

export type TSinchColorSwatchElement = NectaryComponentVanillaByType<TSinchColorSwatch>
export type TSinchColorSwatchReact = NectaryComponentReactByType<TSinchColorSwatch>
