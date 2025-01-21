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
} & {
  style?: {
    // Colors - Warning State
    '--sinch-comp-alert-color-warning-default-background'?: string,
    '--sinch-comp-alert-color-warning-default-icon'?: string,
    '--sinch-comp-alert-color-warning-default-text'?: string,

    // Colors - Error State
    '--sinch-comp-alert-color-error-default-background'?: string,
    '--sinch-comp-alert-color-error-default-icon'?: string,
    '--sinch-comp-alert-color-error-default-text'?: string,

    // Colors - Info State
    '--sinch-comp-alert-color-info-default-background'?: string,
    '--sinch-comp-alert-color-info-default-icon'?: string,
    '--sinch-comp-alert-color-info-default-text'?: string,

    // Fonts
    '--sinch-comp-alert-font-body'?: string,

    // Global Properties
    '--sinch-global-color-icon'?: string,
    '--sinch-global-color-text'?: string,
    '--sinch-comp-rich-text-font'?: string,
  },
}
