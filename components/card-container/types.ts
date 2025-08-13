import type { NectaryComponentReactByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchCardContainerElement = HTMLElement
export type TSinchCardContainerReact = NectaryComponentReactByType<TSinchCardContainerElement>

declare global {
  interface NectaryComponentMap {
    'sinch-card-container': {},
  }

  interface HTMLElementTagNameMap {
    'sinch-card-container': NectaryComponentVanilla<'sinch-card-container'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-card-container': NectaryComponentReact<'sinch-card-container'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-card-container': NectaryComponentReact<'sinch-card-container'>,
    }
  }
}
