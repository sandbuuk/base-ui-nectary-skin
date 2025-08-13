import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchTextType = 'm' | 's' | 'xs' | 'xxs'

export type TSinchTextProps = {
  /** Type */
  type: TSinchTextType,
  /** Block (“paragraph”, default) or inline (“span”) */
  inline?: boolean,
  /** Emphasized */
  emphasized?: boolean,
  /** Cuts the long text with “…” ellipsis */
  ellipsis?: boolean,
}

export type TSinchTextStyle = {
  // Text Properties
  '--sinch-comp-text-align'?: string,
  '--sinch-comp-text-font'?: string,

  // System Fonts
  '--sinch-sys-font-body-m'?: string,
  '--sinch-sys-font-body-s'?: string,
  '--sinch-sys-font-body-xs'?: string,
  '--sinch-sys-font-body-xxs'?: string,
  '--sinch-sys-font-body-emphasize'?: string,
  '--sinch-sys-font-body-emphasize-s'?: string,

  // Colors
  '--sinch-global-color-text'?: string,
  '--sinch-sys-color-text-default'?: string,

  // Global Properties
  '--sinch-global-text-white-space'?: string,
}

export type TSinchText = {
  props: TSinchTextProps,
  style: TSinchTextStyle,
}

export type TSinchTextElement = NectaryComponentVanillaByType<TSinchText>
export type TSinchTextReact = NectaryComponentReactByType<TSinchText>

declare global {
  interface NectaryComponentMap {
    'sinch-text': TSinchText,
  }

  interface HTMLElementTagNameMap {
    'sinch-text': NectaryComponentVanilla<'sinch-text'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-text': NectaryComponentReact<'sinch-text'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-text': NectaryComponentReact<'sinch-text'>,
    }
  }
}
