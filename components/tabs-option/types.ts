import type { TSinchElementReact } from '../types'

export type TSinchTabsOptionElement = HTMLElement & {
  /** Value */
  value: string,
  /** Text */
  text: string,
  /** Disabled */
  disabled: boolean,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchTabsOptionReact = TSinchElementReact<TSinchTabsOptionElement> & {
  /** Value */
  value: string,
  /** Text */
  text: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Disabled */
  disabled?: boolean,
}
