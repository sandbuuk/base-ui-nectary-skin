import { defineCustomElement } from '../../../utils/element'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-icon-branded-direction')
declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-direction': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-direction': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-direction': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-direction': TSinchIconBrandedReact,
    }
  }
}
