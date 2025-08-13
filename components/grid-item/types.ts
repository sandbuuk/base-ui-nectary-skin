import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchGridItemProps = {
  xl?: number,
  l?: number,
  m?: number,
  s?: number,
}

export type TSinchGridItem = {
  props: TSinchGridItemProps,
}

export type TSinchGridItemElement = NectaryComponentVanillaByType<TSinchGridItem>
export type TSinchGridItemReact = NectaryComponentReactByType<TSinchGridItem>

declare global {
  interface NectaryComponentMap {
    'sinch-grid-item': TSinchGridItem,
  }

  interface HTMLElementTagNameMap {
    'sinch-grid-item': NectaryComponentVanilla<'sinch-grid-item'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-grid-item': NectaryComponentReact<'sinch-grid-item'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-grid-item': NectaryComponentReact<'sinch-grid-item'>,
    }
  }
}
