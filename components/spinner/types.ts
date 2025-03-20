import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'
import type { TSinchSize } from '../utils/size'

export type TSinchSpinnerProps = {
  /** Spinner size */
  size?: TSinchSize,
}

export type TSinchSpinnerStyle = {
  // Colors
  '--sinch-global-color-icon'?: string,
  '--sinch-sys-color-text-default'?: string,
}

export type TSinchSpinner = {
  props: TSinchSpinnerProps,
  style: TSinchSpinnerStyle,
}

export type TSinchSpinnerElement = NectaryComponentVanillaByType<TSinchSpinner>
export type TSinchSpinnerReact = NectaryComponentReactByType<TSinchSpinner>
