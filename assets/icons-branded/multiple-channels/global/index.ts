import { defineCustomElement } from '../../../utils/element'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-icon-branded-multiple-channels')
declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-multiple-channels': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-multiple-channels': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-multiple-channels': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-multiple-channels': TSinchIconBrandedReact,
    }
  }
}
