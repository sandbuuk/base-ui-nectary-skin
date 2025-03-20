import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchRadioProps = {
  value: string,
  invalid?: boolean,
  'aria-label': string,
}

export type TSinchRadioEvents = {
  '-change'?: (e: CustomEvent<string>) => void,
}

export type TSinchRadioStyle = {
  '--sinch-comp-radio-direction'?: 'row' | 'column',
  '--sinch-comp-radio-gap'?: number | string,
}

export type TSinchRadio = {
  props: TSinchRadioProps,
  events: TSinchRadioEvents,
  style: TSinchRadioStyle,
}

export type TSinchRadioElement = NectaryComponentVanillaByType<TSinchRadio>
export type TSinchRadioReact = NectaryComponentReactByType<TSinchRadio>
