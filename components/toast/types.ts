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
} & {
  style?: {
    // Shape
    '--sinch-comp-toast-shape-radius'?: string,

    // Font
    '--sinch-comp-toast-font-body'?: string,

    // Shadow
    '--sinch-comp-toast-shadow'?: string,

    // Colors - Success State
    '--sinch-comp-toast-color-success-default-background'?: string,
    '--sinch-comp-toast-color-success-default-text'?: string,
    '--sinch-comp-toast-color-success-default-icon'?: string,

    // Colors - Warning State
    '--sinch-comp-toast-color-warning-default-background'?: string,
    '--sinch-comp-toast-color-warning-default-text'?: string,
    '--sinch-comp-toast-color-warning-default-icon'?: string,

    // Colors - Error State
    '--sinch-comp-toast-color-error-default-background'?: string,
    '--sinch-comp-toast-color-error-default-text'?: string,
    '--sinch-comp-toast-color-error-default-icon'?: string,

    // Colors - Info State
    '--sinch-comp-toast-color-info-default-background'?: string,
    '--sinch-comp-toast-color-info-default-text'?: string,
    '--sinch-comp-toast-color-info-default-icon'?: string,

    // Global Properties
    '--sinch-global-color-text'?: string,
    '--sinch-global-color-icon'?: string,
  },
}
