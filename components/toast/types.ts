import type { TSinchElementReact } from '../types'

export type TSinchToastType = 'info' | 'warn' | 'error' | 'success'

export type TSinchToastElement = HTMLElement & {
  /** Type */
  type: TSinchToastType,
  /** Text */
  text: string,
  /** Persistent, i.e. doesn't automatically dissapear after 5s */
  persistent: boolean,
  /** Timeout event */
  addEventListener(type: '-timeout', listener: (e: CustomEvent<void>) => void): void,
  /** Type */
  setAttribute(name: 'type', value: TSinchToastType): void,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Persistent, i.e. doesn't automatically dissapear after 5s */
  setAttribute(name: 'persistent', value: ''): void,
}

export type TSinchToastReact = TSinchElementReact<TSinchToastElement> & {
  /** Type */
  type: TSinchToastType,
  /** Text */
  text: string,
  /** Persistent, i.e. doesn't automatically dissapear after 5s */
  persistent?: boolean,
  /** Timeout handler */
  'on-timeout'?: (e: CustomEvent<void>) => void,
}
