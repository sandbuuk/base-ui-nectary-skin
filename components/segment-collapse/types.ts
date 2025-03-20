import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchSegmentExpandProps = {
  value: boolean,
  'aria-label': string,
}

export type TSinchSegmentExpandEvents = {
  '-change'?: (e: CustomEvent<boolean>) => void,
}

export type TSinchSegmentExpandStyle = {
  // Global
  '--sinch-global-size-icon'?: string,
}

export type TSinchSegmentExpand = {
  props: TSinchSegmentExpandProps,
  events: TSinchSegmentExpandEvents,
  style: TSinchSegmentExpandStyle,
}

export type TSinchSegmentExpandElement = NectaryComponentVanillaByType<TSinchSegmentExpand>
export type TSinchSegmentExpandReact = NectaryComponentReactByType<TSinchSegmentExpand>
