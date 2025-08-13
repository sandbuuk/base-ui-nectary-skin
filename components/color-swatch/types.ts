import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchColorSwatchProps = {
  /** Color name */
  name?: string,
}

export type TSinchColorSwatchStyle = {
  // Global Properties
  '--sinch-global-size-icon'?: string,

  // Reference Colors
  '--sinch-ref-color-violet-200'?: string,
  '--sinch-ref-color-honey-200'?: string,
  '--sinch-ref-color-grass-200'?: string,
  '--sinch-ref-color-ocean-200'?: string,
}

export type TSinchColorSwatch = {
  props: TSinchColorSwatchProps,
  style: TSinchColorSwatchStyle,
}

export type TSinchColorSwatchElement = NectaryComponentVanillaByType<TSinchColorSwatch>
export type TSinchColorSwatchReact = NectaryComponentReactByType<TSinchColorSwatch>

declare global {
  interface NectaryComponentMap {
    'sinch-color-swatch': TSinchColorSwatch,
  }

  interface HTMLElementTagNameMap {
    'sinch-color-swatch': NectaryComponentVanilla<'sinch-color-swatch'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-color-swatch': NectaryComponentReact<'sinch-color-swatch'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-color-swatch': NectaryComponentReact<'sinch-color-swatch'>,
    }
  }
}
