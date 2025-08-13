import { defineCustomElement } from '../../../utils/element'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-icon-branded-help')
declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-help': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-help': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-help': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-help': TSinchIconBrandedReact,
    }
  }
}
