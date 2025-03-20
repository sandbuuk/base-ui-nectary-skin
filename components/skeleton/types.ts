import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchSkeletonProps = {
  /** Card like container */
  card?: boolean,
}

export type TSinchSkeletonStyle = {
  // Surface Colors
  '--sinch-sys-color-surface-primary-default'?: string,
  '--sinch-sys-color-surface-tertiary-default'?: string,

  // Border
  '--sinch-sys-color-border-subtle'?: string,

  // Shape
  '--sinch-sys-shape-radius-l'?: string,
}

export type TSinchSkeleton = {
  props: TSinchSkeletonProps,
  style: TSinchSkeletonStyle,
}

export type TSinchSkeletonElement = NectaryComponentVanillaByType<TSinchSkeleton>
export type TSinchSkeletonReact = NectaryComponentReactByType<TSinchSkeleton>
