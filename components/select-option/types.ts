import type { TSinchElementReact } from '../types'

export type TSinchSelectOptionElement = HTMLElement & {
  /** Value */
  value: string,
  /** Text */
  text: string,
  /** Disabled */
  disabled: boolean,
  readonly icon: Element | null,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchSelectOptionReact = TSinchElementReact<TSinchSelectOptionElement> & {
  /** Value */
  value: string,
  /** Text */
  text: string,
  /** Disabled */
  disabled?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
}
