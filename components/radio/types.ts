import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchRadioElement = HTMLElement & {
  value: string,
  invalid: boolean,
  addEventListener(type: 'change', listener: (e: CustomEvent<boolean>) => void): void,
  addEventListener(type: '-change', listener: (e: CustomEvent<boolean>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'invalid', value: ''): void,
}

export type TSinchRadioReact = TSinchElementReact<TSinchRadioElement> & {
  value: string,
  invalid?: boolean,
  'aria-label': string,
  /** @deprecated */
  onChange?: (event: SyntheticEvent<TSinchRadioElement, CustomEvent<boolean>>) => void,
  'on-change'?: (e: CustomEvent<string>) => void,
}
