import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

defineCustomElement('sinch-icon-branded-opened-message', createIconClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-opened-message': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-opened-message': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-opened-message': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-opened-message': TSinchIconBrandedReact,
    }
  }
}
