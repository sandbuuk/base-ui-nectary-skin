import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'
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

declare global {
  interface NectaryComponentMap {
    'sinch-spinner': TSinchSpinner,
  }

  interface HTMLElementTagNameMap {
    'sinch-spinner': NectaryComponentVanilla<'sinch-spinner'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-spinner': NectaryComponentReact<'sinch-spinner'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-spinner': NectaryComponentReact<'sinch-spinner'>,
    }
  }
}
