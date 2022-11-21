import type { TSinchElementReact } from '../types'

export type TSinchSelectMenuOptionElement = HTMLElement & {
  /** Value */
  value: string,
  /** Display text */
  text: string,
  /** Disabled state */
  disabled: boolean,
  matchesSearch(value: string): boolean,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Display text */
  setAttribute(name: 'text', value: string): void,
  /** Disabled state */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchSelectMenuOptionReact = TSinchElementReact<TSinchSelectMenuOptionElement> & {
  /** Value */
  value: string,
  /** Display text */
  text: string,
  /** Disabled state */
  disabled?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
}
