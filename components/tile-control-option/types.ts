import type { TSinchElementReact } from '../types'

export type TSinchTileControlOptionElement = HTMLElement & {
  /** Value */
  value: string,
  /** Text content */
  text: string,
  /** Disabled */
  disabled: boolean,
  /** Small */
  small: boolean,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Text content */
  setAttribute(attr: 'text', value: string): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
  /** Small */
  setAttribute(name: 'small', value: ''): void,
}

export type TSinchTileControlOptionReact = TSinchElementReact<TSinchTileControlOptionElement> & {
  /** Value */
  value: string,
  /** Text content */
  text: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Disabled */
  disabled?: boolean,
  /** Focus handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
}
