import type { NectaryComponentReactByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchTableBodyElement = HTMLElement
export type TSinchTableBodyReact = NectaryComponentReactByType<TSinchTableBodyElement>

declare global {
  interface NectaryComponentMap {
    'sinch-table-body': {},
  }

  interface HTMLElementTagNameMap {
    'sinch-table-body': NectaryComponentVanilla<'sinch-table-body'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-body': NectaryComponentReact<'sinch-table-body'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-table-body': NectaryComponentReact<'sinch-table-body'>,
    }
  }
}
