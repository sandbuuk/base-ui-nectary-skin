import type { NectaryComponentReactByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchTableHeadElement = HTMLElement
export type TSinchTableHeadReact = NectaryComponentReactByType<TSinchTableHeadElement>

declare global {
  interface NectaryComponentMap {
    'sinch-table-head': {},
  }

  interface HTMLElementTagNameMap {
    'sinch-table-head': NectaryComponentVanilla<'sinch-table-head'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-head': NectaryComponentReact<'sinch-table-head'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-table-head': NectaryComponentReact<'sinch-table-head'>,
    }
  }
}
