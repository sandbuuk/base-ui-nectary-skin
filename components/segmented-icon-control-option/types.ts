import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchSegmentedIconControlOptionProps = {
  value: string,
  disabled?: boolean,
  'aria-label': string,
}

export type TSinchSegmentedIconControlOptionEvents = {
  '-focus'?: (e: CustomEvent<void>) => void,
  '-blur'?: (e: CustomEvent<void>) => void,
}

export type TSinchSegmentedIconControlOptionStyle = {
  // Shape
  '--sinch-comp-segmented-control-shape-radius'?: string,

  // Colors - Default State
  '--sinch-comp-segmented-control-color-default-icon-initial'?: string,
  '--sinch-comp-segmented-control-color-default-border-initial'?: string,
  '--sinch-comp-segmented-control-color-default-background-initial'?: string,
  '--sinch-comp-segmented-control-color-default-background-hover'?: string,
  '--sinch-comp-segmented-control-color-default-outline-focus'?: string,

  // Colors - Checked State
  '--sinch-comp-segmented-control-color-checked-icon-initial'?: string,
  '--sinch-comp-segmented-control-color-checked-border-initial'?: string,
  '--sinch-comp-segmented-control-color-checked-background-initial'?: string,

  // Colors - Disabled State
  '--sinch-comp-segmented-control-color-disabled-icon-initial'?: string,
  '--sinch-comp-segmented-control-color-disabled-border-initial'?: string,
  '--sinch-comp-segmented-control-color-disabled-background-initial'?: string,

  // Size
  '--sinch-comp-segmented-control-size-icon'?: string,
}

export type TSinchSegmentedIconControlOption = {
  props: TSinchSegmentedIconControlOptionProps,
  events: TSinchSegmentedIconControlOptionEvents,
  style: TSinchSegmentedIconControlOptionStyle,
}

export type TSinchSegmentedIconControlOptionElement = NectaryComponentVanillaByType<TSinchSegmentedIconControlOption>
export type TSinchSegmentedIconControlOptionReact = NectaryComponentReactByType<TSinchSegmentedIconControlOption>
