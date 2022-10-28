import type { TSinchElementReact } from '../types'

export type TSinchTabsOptionElement = HTMLElement & {
  value: string,
  disabled: boolean,
  text: string,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
  setAttribute(name: 'text', value: string): void,
}

export type TSinchTabsOptionReact = TSinchElementReact<TSinchTabsOptionElement> & {
  value: string,
  disabled?: boolean,
  text: string,
  'aria-label': string,
}
