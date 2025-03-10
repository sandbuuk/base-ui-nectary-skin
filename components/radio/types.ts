import type { TSinchElementReact } from '../types'

export type TSinchRadioElement = HTMLElement & {
  value: string,
  invalid: boolean,
  addEventListener(
    type: '-change',
    listener: (e: CustomEvent<boolean>) => void
  ): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'invalid', value: ''): void,
}

export type TSinchRadioReact = TSinchElementReact<TSinchRadioElement> & {
  value: string,
  invalid?: boolean,
  'aria-label': string,
  'on-change'?: (e: CustomEvent<string>) => void,
} & {
  style?: {
    '--sinch-comp-radio-direction'?: 'row' | 'column',
    '--sinch-comp-radio-gap'?: number | string,
  },
}
