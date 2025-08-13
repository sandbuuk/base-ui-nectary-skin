import { defineCustomElement } from '../../../utils/element'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-icon-branded-contact')
declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-contact': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-contact': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-contact': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-contact': TSinchIconBrandedReact,
    }
  }
}
