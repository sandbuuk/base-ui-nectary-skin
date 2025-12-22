import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export const SKINTONE_SWATCH_COLORS = [
  'skintone-dark',
  'skintone-default',
  'skintone-light',
  'skintone-light-medium',
  'skintone-medium',
  'skintone-medium-dark',
] as const

export const SWATCH_COLORS = [
  'blue',
  'dark-blue',
  'dark-gray',
  'dark-green',
  'dark-orange',
  'dark-pink',
  'dark-red',
  'dark-violet',
  'dark-yellow',
  'default',
  'gray',
  'green',
  'light-blue',
  'light-gray',
  'light-green',
  'light-orange',
  'light-pink',
  'light-red',
  'light-violet',
  'light-yellow',
  'orange',
  'pink',
  'red',
  'violet',
  'yellow',
  ...SKINTONE_SWATCH_COLORS,
] as const

export type SkinToneColor = typeof SKINTONE_SWATCH_COLORS[number]
export type SwatchColors = typeof SWATCH_COLORS[number]

export type TSinchColorSwatchProps = {
  /** Color name */
  name?: string,
  /** Aria label */
  'aria-label'?: string,
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
