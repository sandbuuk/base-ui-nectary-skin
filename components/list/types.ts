import type { NectaryComponentReactByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchListElement = HTMLElement
export type TSinchListReact = NectaryComponentReactByType<TSinchListElement>

declare global {
  interface NectaryComponentMap {
    'sinch-list': {},
  }

  interface HTMLElementTagNameMap {
    'sinch-list': NectaryComponentVanilla<'sinch-list'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-list': NectaryComponentReact<'sinch-list'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-list': NectaryComponentReact<'sinch-list'>,
    }
  }
}
