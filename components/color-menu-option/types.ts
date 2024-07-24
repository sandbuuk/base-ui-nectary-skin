import type { TSinchElementReact } from '../types'

export type TSinchColorMenuOptionElement = HTMLElement & {
  /** Value */
  value: string,
  /** Value */
  setAttribute(name: 'value', value: string): void,
}

export type TSinchColorMenuOptionReact = TSinchElementReact<TSinchColorMenuOptionElement> & {
  /** Value */
  value: string,
}
