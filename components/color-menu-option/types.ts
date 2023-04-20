import type { TSinchElementReact } from '../types'

export type TSinchColorMenuOptionElement = HTMLElement & {
  /** Value */
  value: string,
}

export type TSinchColorMenuOptionReact = TSinchElementReact<TSinchColorMenuOptionElement> & {
  /** Value */
  value: string,
}
