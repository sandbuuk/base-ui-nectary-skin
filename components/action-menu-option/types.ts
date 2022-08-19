import type { TSinchElementReact } from '../types'

export type TSinchActionMenuOptionElement = HTMLElement & {
  text: string,
  disabled: boolean,
  addEventListener(type: '-click', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchActionMenuOptionReact = TSinchElementReact<TSinchActionMenuOptionElement> & {
  text: string,
  disabled?: boolean,
  'aria-label': string,
  'on-click'?: (e: CustomEvent<void>) => void,
}
