import type { TSinchElementReact } from '../types'

export type TSinchTabsIconOptionElement = HTMLElement & {
  /** Value */
  value: string,
  /** Disabled */
  disabled: boolean,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchTabsIconOptionReact = TSinchElementReact<TSinchTabsIconOptionElement> & {
  /** Value */
  value: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Disabled */
  disabled?: boolean,
}
