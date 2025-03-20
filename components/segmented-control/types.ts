import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchSegmentedControlProps = {
  value: string,
  'aria-label': string,
}

export type TSinchSegmentedControlEvents = {
  '-change'?: (e: CustomEvent<string>) => void,
}

export type TSinchSegmentedControl = {
  props: TSinchSegmentedControlProps,
  events: TSinchSegmentedControlEvents,
}

export type TSinchSegmentedControlElement = NectaryComponentVanillaByType<TSinchSegmentedControl>
export type TSinchSegmentedControlReact = NectaryComponentReactByType<TSinchSegmentedControl>
