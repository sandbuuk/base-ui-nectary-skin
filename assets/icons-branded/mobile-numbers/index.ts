import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export const IconBrandedMobileNumbers = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-mobile-numbers', IconBrandedMobileNumbers)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-mobile-numbers': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-mobile-numbers': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-mobile-numbers': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-mobile-numbers': TSinchIconBrandedReact,
    }
  }
}
