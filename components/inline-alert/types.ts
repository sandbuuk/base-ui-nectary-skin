import type { TSinchElementReact } from '../types'

export type TSinchInlineAlertType = 'info' | 'success' | 'warn' | 'error'

export type TSinchInlineAlertElement = HTMLElement & {
  type: TSinchInlineAlertType,
  text: string | null,
  caption: string,
  setAttribute(name: 'type', value: TSinchInlineAlertType): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'caption', value: string): void,
}

export type TSinchInlineAlertReact = TSinchElementReact<TSinchInlineAlertElement> & {
  type: TSinchInlineAlertType,
  text?: string,
  caption?: string,
} & {
  style?: {
    // Shape
    '--sinch-comp-inline-alert-shape-radius'?: string,

    // Colors - Success State
    '--sinch-comp-inline-alert-color-success-default-background'?: string,
    '--sinch-comp-inline-alert-color-success-default-text'?: string,
    '--sinch-comp-inline-alert-color-success-default-icon'?: string,

    // Colors - Warning State
    '--sinch-comp-inline-alert-color-warning-default-background'?: string,
    '--sinch-comp-inline-alert-color-warning-default-text'?: string,
    '--sinch-comp-inline-alert-color-warning-default-icon'?: string,

    // Colors - Error State
    '--sinch-comp-inline-alert-color-error-default-background'?: string,
    '--sinch-comp-inline-alert-color-error-default-text'?: string,
    '--sinch-comp-inline-alert-color-error-default-icon'?: string,

    // Colors - Info State
    '--sinch-comp-inline-alert-color-info-default-background'?: string,
    '--sinch-comp-inline-alert-color-info-default-text'?: string,
    '--sinch-comp-inline-alert-color-info-default-icon'?: string,

    // Font Properties
    '--sinch-comp-inline-alert-font-title'?: string,
    '--sinch-comp-inline-alert-font-body'?: string,

    // Component Properties
    '--sinch-comp-title-font'?: string,
    '--sinch-comp-rich-text-font'?: string,

    // Global Properties
    '--sinch-global-color-text'?: string,
    '--sinch-global-color-icon'?: string,
  },
}
