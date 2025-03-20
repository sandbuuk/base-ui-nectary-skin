import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect } from '../types'
import type { TSinchSize } from '../utils/size'

export type TSinchBadgeMode = 'square' | 'circle'

export type TSinchBadgeProps = {
  /** Text */
  text: string,
  /** Size */
  size?: TSinchSize,
  /** Mode, `square` by default */
  mode?: TSinchBadgeMode,
  /** Hidden */
  hidden?: boolean,
  /** Badge rect */
  readonly badgeRect?: TRect,
}

export type TSinchBadgeStyle = {
  // Colors
  '--sinch-comp-badge-color-border'?: string,
  '--sinch-comp-badge-color-text'?: string,
  '--sinch-comp-badge-color-background'?: string,

  // Shapes
  '--sinch-comp-badge-shape-radius'?: string,

  // Fonts
  '--sinch-comp-badge-font-size-l'?: string,
  '--sinch-comp-badge-font-size-m'?: string,
}

export type TSinchBadge = {
  props: TSinchBadgeProps,
  style: TSinchBadgeStyle,
}

export type TSinchBadgeElement = NectaryComponentVanillaByType<TSinchBadge>
export type TSinchBadgeReact = NectaryComponentReactByType<TSinchBadge>
