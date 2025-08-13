import type { NectaryComponentReactByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchGridStyle = {
  // Grid Properties - XL
  '--sinch-comp-grid-columns-xl'?: string,
  '--sinch-comp-grid-gutter-xl'?: string,
  '--sinch-comp-grid-margin-xl'?: string,
  // Grid Properties - L
  '--sinch-comp-grid-columns-l'?: string,
  '--sinch-comp-grid-gutter-l'?: string,
  '--sinch-comp-grid-margin-l'?: string,
  // Grid Properties - M
  '--sinch-comp-grid-columns-m'?: string,
  '--sinch-comp-grid-gutter-m'?: string,
  '--sinch-comp-grid-margin-m'?: string,
  // Grid Properties - S
  '--sinch-comp-grid-columns-s'?: string,
  '--sinch-comp-grid-gutter-s'?: string,
  '--sinch-comp-grid-margin-s'?: string,
}

export type TSinchGrid = {
  style: TSinchGridStyle,
}

export type TSinchGridElement = HTMLElement
export type TSinchGridReact = NectaryComponentReactByType<TSinchGridElement>

declare global {
  interface NectaryComponentMap {
    'sinch-grid': TSinchGrid,
  }

  interface HTMLElementTagNameMap {
    'sinch-grid': NectaryComponentVanilla<'sinch-grid'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-grid': NectaryComponentReact<'sinch-grid'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-grid': NectaryComponentReact<'sinch-grid'>,
    }
  }
}
