import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchFlagProps = {
  /** Flag country code */
  code: string,
}

export type TSinchFlagStyle = {
  // Global Properties
  '--sinch-global-size-icon'?: string,
}

export type TSinchFlag = {
  props: TSinchFlagProps,
  style: TSinchFlagStyle,
}

export type TSinchFlagElement = NectaryComponentVanillaByType<TSinchFlag>
export type TSinchFlagReact = NectaryComponentReactByType<TSinchFlag>

declare global {
  interface NectaryComponentMap {
    'sinch-flag': TSinchFlag,
  }

  interface HTMLElementTagNameMap {
    'sinch-flag': NectaryComponentVanilla<'sinch-flag'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-flag': NectaryComponentReact<'sinch-flag'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-flag': NectaryComponentReact<'sinch-flag'>,
    }
  }
}
