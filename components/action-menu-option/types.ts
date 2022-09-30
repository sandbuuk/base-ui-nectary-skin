import type { TSinchElementReact } from '../types'

export type TSinchActionMenuOptionElement = HTMLElement & {
  /** Display text */
  text: string,
  /** Disabled state */
  disabled: boolean,
  /** Click event */
  addEventListener(type: '-click', listener: (e: CustomEvent<void>) => void): void,
  /** Display text */
  setAttribute(name: 'text', value: string): void,
  /** Disabled state */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchActionMenuOptionReact = TSinchElementReact<TSinchActionMenuOptionElement> & {
  /** Display text */
  text: string,
  /** Disabled state */
  disabled?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Click event handler */
  'on-click'?: (e: CustomEvent<void>) => void,
}
