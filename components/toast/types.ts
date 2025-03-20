import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchToastType = 'info' | 'warn' | 'error' | 'success'

export type TSinchToastProps = {
  /** Type */
  type: TSinchToastType,
  /** Text */
  text: string,
  /** Persistent, i.e. doesn't automatically dissapear after 5s */
  persistent?: boolean,
}

export type TSinchToastEvents = {
  /** Timeout handler */
  '-timeout'?: (e: CustomEvent<void>) => void,
}

export type TSinchToastStyle = {
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
}

export type TSinchToast = {
  props: TSinchToastProps,
  events: TSinchToastEvents,
  style: TSinchToastStyle,
}

export type TSinchToastElement = NectaryComponentVanillaByType<TSinchToast>
export type TSinchToastReact = NectaryComponentReactByType<TSinchToast>
