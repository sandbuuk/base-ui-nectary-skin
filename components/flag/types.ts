import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchFlagProps = {
  /** Flag country code */
  code: string,
}

export type TSinchFlagStyle = {
  // Global Properties
  '--sinch-global-size-icon'?: string,
}

export type TSinchFlag = {
  props: TSinchFlagProps,
  style: TSinchFlagStyle,
}

export type TSinchFlagElement = NectaryComponentVanillaByType<TSinchFlag>
export type TSinchFlagReact = NectaryComponentReactByType<TSinchFlag>
