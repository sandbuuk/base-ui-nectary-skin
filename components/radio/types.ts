import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchRadioElement = HTMLElement & {
  value: string,
  addEventListener(type: 'change', listener: (e: CustomEvent<boolean>) => void): void,
  addEventListener(type: '-change', listener: (e: CustomEvent<boolean>) => void): void,
  setAttribute(name: 'value', value: string): void,
}

export type TSinchRadioReact = TSinchElementReact<TSinchRadioElement> & {
  value: string,
  'aria-label': string,
  /** @deprecated */
  onChange?: (event: SyntheticEvent<TSinchRadioElement, CustomEvent<boolean>>) => void,
  'on-change'?: (e: CustomEvent<string>) => void,
}
