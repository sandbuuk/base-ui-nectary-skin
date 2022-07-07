import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchTabsElement = HTMLElement & {
  value: string,
  addEventListener(type: 'change', listener: (e: CustomEvent<string>) => void): void,
  setAttribute(name: 'value', value: string): void,
}

export type TSinchTabsReact = TSinchElementReact<TSinchTabsElement> & {
  value: string,
  'aria-label': string,
  onChange: (event: SyntheticEvent<TSinchTabsElement, CustomEvent<string>>) => void,
}
