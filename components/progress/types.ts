import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchProgressProps = {
  value: number,
  detailed?: boolean,
  'aria-label': string,
}

export type TSinchProgressStyle = {
  // Colors - Default State
  '--sinch-comp-progress-color-default-background-initial'?: string,
  '--sinch-comp-progress-color-default-bar-initial'?: string,
  '--sinch-comp-progress-color-default-text-initial'?: string,
}

export type TSinchProgress = {
  props: TSinchProgressProps,
  style: TSinchProgressStyle,
}

export type TSinchProgressElement = NectaryComponentVanillaByType<TSinchProgress>
export type TSinchProgressReact = NectaryComponentReactByType<TSinchProgress>
