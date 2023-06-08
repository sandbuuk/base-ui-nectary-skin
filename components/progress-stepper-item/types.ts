import type { TSinchElementReact } from '../types'

export type TSinchProgressStepperItemElement = HTMLElement & {
  /** Value */
  value: string,
  /** Text */
  text: string,
  /** Invalid */
  invalid: boolean,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Invalid */
  setAttribute(name: 'invalid', value: ''): void,
}

export type TSinchProgressStepperItemReact = TSinchElementReact<TSinchProgressStepperItemElement> & {
  /** Value */
  value: string,
  /** Text */
  text: string,
  /** Invalid */
  invalid?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
}
