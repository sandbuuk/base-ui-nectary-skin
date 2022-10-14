import type { TSinchElementReact } from '../types'

export type TSinchAlertType = 'info' | 'warn' | 'error'

export type TSinchAlertElement = HTMLElement & {
  /** Type */
  type: TSinchAlertType,
  /** Text */
  text: string,
  /** Type */
  setAttribute(name: 'type', value: TSinchAlertType): void,
  /** Text */
  setAttribute(name: 'text', value: string): void,
}

export type TSinchAlertReact = TSinchElementReact<TSinchAlertElement> & {
  /** Type */
  type: TSinchAlertType,
  /** Text */
  text: string,
}
