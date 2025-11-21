import type { TSinchIcons } from '../icon'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchInlineAlertType = 'info' | 'success' | 'warn' | 'error'

export type TSinchInlineAlertProps = {
  type: TSinchInlineAlertType,
  text?: string | null,
  caption?: string,
  icon?: TSinchIcons,
}

export type TSinchInlineAlertStyle = {
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
}

export type TSinchInlineAlert = {
  props: TSinchInlineAlertProps,
  style: TSinchInlineAlertStyle,
}

export type TSinchInlineAlertElement = NectaryComponentVanillaByType<TSinchInlineAlert>
export type TSinchInlineAlertReact = NectaryComponentReactByType<TSinchInlineAlert>

declare global {
  interface NectaryComponentMap {
    'sinch-inline-alert': TSinchInlineAlert,
  }

  interface HTMLElementTagNameMap {
    'sinch-inline-alert': NectaryComponentVanilla<'sinch-inline-alert'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-inline-alert': NectaryComponentReact<'sinch-inline-alert'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-inline-alert': NectaryComponentReact<'sinch-inline-alert'>,
    }
  }
}
