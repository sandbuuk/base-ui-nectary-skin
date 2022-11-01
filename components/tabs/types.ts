import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchTabsElement = HTMLElement & {
  /** Value */
  value: string,
  nthOptionRect(index: number): TRect | null,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Value */
  setAttribute(name: 'value', value: string): void,
}

export type TSinchTabsReact = TSinchElementReact<TSinchTabsElement> & {
  /** Value */
  value: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** @deprecated Change value handler */
  onChange?: (event: SyntheticEvent<TSinchTabsElement, CustomEvent<string>>) => void,
  /** Change value event */
  'on-change'?: (e: CustomEvent<string>) => void,
}
