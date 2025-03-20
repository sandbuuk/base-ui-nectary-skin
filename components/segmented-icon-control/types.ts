import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchSegmentedIconControlProps = {
  value: string,
  multiple?: boolean,
  'aria-label': string,
}

export type TSinchSegmentedIconControlEvents = {
  '-change'?: (e: CustomEvent<string>) => void,
}

export type TSinchSegmentedIconControl = {
  props: TSinchSegmentedIconControlProps,
  events: TSinchSegmentedIconControlEvents,
}

export type TSinchSegmentedIconControlElement = NectaryComponentVanillaByType<TSinchSegmentedIconControl>
export type TSinchSegmentedIconControlReact = NectaryComponentReactByType<TSinchSegmentedIconControl>
