
import type { NectaryComponentReactByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchTableElement = HTMLElement
export type TSinchTableReact = NectaryComponentReactByType<TSinchTableElement>

declare global {
  interface NectaryComponentMap {
    'sinch-table': {},
  }

  interface HTMLElementTagNameMap {
    'sinch-table': NectaryComponentVanilla<'sinch-table'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-table': NectaryComponentReact<'sinch-table'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-table': NectaryComponentReact<'sinch-table'>,
    }
  }
}
