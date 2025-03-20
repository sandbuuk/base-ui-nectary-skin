import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect } from '../types'
import type { TSinchSize } from '../utils/size'

export type TSinchSegmentProps = {
  caption: string,
  collapsed?: boolean,
  size?: TSinchSize,
  readonly collapseButtonRect?: TRect | null,
}

export type TSinchSegmentStyle = {
  // Shape
  '--sinch-comp-segment-shape-radius'?: string,

  // Colors - Default State
  '--sinch-comp-segment-color-default-border-initial'?: string,
  '--sinch-comp-segment-color-default-background-initial'?: string,

  // Fonts
  '--sinch-comp-segment-font-size-m-title'?: string,
  '--sinch-comp-segment-font-size-l-title'?: string,
  '--sinch-comp-segment-font-size-s-title'?: string,

  // Global
  '--sinch-global-size-icon'?: string,
}

export type TSinchSegment = {
  props: TSinchSegmentProps,
  style: TSinchSegmentStyle,
}

export type TSinchSegmentElement = NectaryComponentVanillaByType<TSinchSegment>
export type TSinchSegmentReact = NectaryComponentReactByType<TSinchSegment>
