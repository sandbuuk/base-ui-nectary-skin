import type { TSinchElementReact } from '../types'

export type TSinchTileControlOptionElement = HTMLElement & {
  value: string,
  /** Text content */
  text: string,
  /** Disabled */
  disabled: boolean,
  /** Small */
  small: boolean,
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'value', value: string): void,
  /** Text content */
  setAttribute(attr: 'text', value: string): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
  /** Small */
  setAttribute(name: 'small', value: ''): void,
}

export type TSinchTileControlOptionReact = TSinchElementReact<TSinchTileControlOptionElement> & {
  value: string,
  /** Text content */
  text: string,
  /** Label that is used for a11y – might be different from `label` */
  'aria-label': string,
  /** Disabled */
  disabled?: boolean,
  'on-focus'?: (e: CustomEvent<void>) => void,
  'on-blur'?: (e: CustomEvent<void>) => void,
}
