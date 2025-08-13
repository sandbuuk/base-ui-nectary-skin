import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchTitleType = 'xl' | 'l' | 'm' | 's' | 'xs'
export type TSinchTitleLevel = '1' | '2' | '3' | '4' | '5' | '6'

export type TSinchTitleProps = {
  /** Text */
  text: string,
  /** Type */
  type: TSinchTitleType,
  /** Semantical level */
  level: TSinchTitleLevel,
  /** Cuts the long title with “…” ellipsis */
  ellipsis?: boolean,
}

export type TSinchTitleStyle = {
  // Font
  '--sinch-comp-title-font'?: string,
  '--sinch-sys-font-desktop-title-xl'?: string,
  '--sinch-sys-font-desktop-title-l'?: string,
  '--sinch-sys-font-desktop-title-m'?: string,
  '--sinch-sys-font-desktop-title-s'?: string,
  '--sinch-sys-font-desktop-title-xs'?: string,

  // Colors
  '--sinch-global-color-text'?: string,
  '--sinch-sys-color-text-default'?: string,
}

export type TSinchTitle = {
  props: TSinchTitleProps,
  style: TSinchTitleStyle,
}

export type TSinchTitleElement = NectaryComponentVanillaByType<TSinchTitle>
export type TSinchTitleReact = NectaryComponentReactByType<TSinchTitle>

declare global {
  interface NectaryComponentMap {
    'sinch-title': TSinchTitle,
  }

  interface HTMLElementTagNameMap {
    'sinch-title': NectaryComponentVanilla<'sinch-title'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-title': NectaryComponentReact<'sinch-title'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-title': NectaryComponentReact<'sinch-title'>,
    }
  }
}
