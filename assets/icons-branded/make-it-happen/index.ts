import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export const IconBrandedMakeItHappen = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-make-it-happen', IconBrandedMakeItHappen)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-make-it-happen': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-make-it-happen': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-make-it-happen': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-make-it-happen': TSinchIconBrandedReact,
    }
  }
}
