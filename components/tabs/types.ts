import type { TRect, TSinchElementReact } from '../types'

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
  /** Change value event */
  'on-change'?: (e: CustomEvent<string>) => void,
} & {
  style?: {
    // Colors - Default State
    '--sinch-comp-tab-color-default-border-initial'?: string,
  },
}
