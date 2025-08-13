import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchAlertType = 'info' | 'warn' | 'error'

export type TSinchAlertProps = {
  /** Type */
  type: TSinchAlertType,
  /** Text */
  text: string,
}

export type TSinchAlertStyle = {
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
}

export type TSinchAlert = {
  props: TSinchAlertProps,
  style: TSinchAlertStyle,
}

export type TSinchAlertElement = NectaryComponentVanillaByType<TSinchAlert>
export type TSinchAlertReact = NectaryComponentReactByType<TSinchAlert>

declare global {
  interface NectaryComponentMap {
    'sinch-alert': TSinchAlert,
  }

  interface HTMLElementTagNameMap {
    'sinch-alert': NectaryComponentVanilla<'sinch-alert'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-alert': NectaryComponentReact<'sinch-alert'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-alert': NectaryComponentReact<'sinch-alert'>,
    }
  }
}
