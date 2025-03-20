import type { TSinchTagColor } from './colors'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type { TSinchTagColor }

export type TSinchTagProps = {
  /** Text */
  text: string,
  /** Color, gray by default */
  color?: TSinchTagColor,
  /** Small */
  small?: boolean,
  /** Ellipsis */
  ellipsis?: boolean,
}

export type TSinchTagStyle = {
  // Sizes - Container
  '--sinch-comp-tag-size-container-m'?: string,
  '--sinch-comp-tag-size-container-s'?: string,

  // Sizes - Icon
  '--sinch-comp-tag-size-icon-m'?: string,
  '--sinch-comp-tag-size-icon-s'?: string,

  // Shape
  '--sinch-comp-tag-shape-radius'?: string,

  // Font Sizes
  '--sinch-comp-tag-font-size-m-label'?: string,
  '--sinch-comp-tag-font-size-s-label'?: string,

  // Colors - Default
  '--sinch-comp-tag-color-default-background'?: string,
  '--sinch-comp-tag-color-default-foreground'?: string,

  // Global Properties
  '--sinch-global-color-text'?: string,
  '--sinch-global-color-icon'?: string,
  '--sinch-global-size-icon'?: string,
}

export type TSinchTag = {
  props: TSinchTagProps,
  style: TSinchTagStyle,
}

export type TSinchTagElement = NectaryComponentVanillaByType<TSinchTag>
export type TSinchTagReact = NectaryComponentReactByType<TSinchTag>
