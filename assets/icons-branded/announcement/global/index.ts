import { defineCustomElement } from '../../../utils/element'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-icon-branded-announcement')
declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-announcement': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-announcement': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-announcement': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-announcement': TSinchIconBrandedReact,
    }
  }
}
