import type { TSinchElementReact } from '../types'

export type TSinchTabsIconOptionElement = HTMLElement & {
  value: string,
  disabled: boolean,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchTabsIconOptionReact = TSinchElementReact<TSinchTabsIconOptionElement> & {
  value: string,
  disabled?: boolean,
  'aria-label': string,
}
