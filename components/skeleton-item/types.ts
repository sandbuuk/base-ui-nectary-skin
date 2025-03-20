import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect } from '../types'
import type { TSinchSizeEx } from '../utils/size'

export type TSinchSkeletonItemBoundingBox = TRect & { radius: number }

export type TSinchSkeletonItemProps = {
  /** Size */
  size?: TSinchSizeEx,
}

export type TSinchSkeletonItemStyle = {
  // System Sizes
  '--sinch-sys-size-xs'?: string,
  '--sinch-sys-size-s'?: string,
  '--sinch-sys-size-m'?: string,
  '--sinch-sys-size-l'?: string,

  // Shape Radius
  '--sinch-sys-shape-radius-xs'?: string,
  '--sinch-sys-shape-radius-s'?: string,
  '--sinch-sys-shape-radius-m'?: string,
  '--sinch-sys-shape-radius-l'?: string,

  // Border
  '--sinch-sys-color-border-subtle'?: string,

  // Local Properties
  '--sinch-local-shape-radius'?: string,
}

export type TSinchSkeletonItem = {
  props: TSinchSkeletonItemProps,
  style: TSinchSkeletonItemStyle,
}

export type TSinchSkeletonItemElement = NectaryComponentVanillaByType<TSinchSkeletonItem>
export type TSinchSkeletonItemReact = NectaryComponentReactByType<TSinchSkeletonItem>
