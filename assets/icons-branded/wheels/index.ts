import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

defineCustomElement('sinch-icon-branded-wheels', createIconClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-wheels': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-wheels': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-wheels': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-wheels': TSinchIconBrandedReact,
    }
  }
}
