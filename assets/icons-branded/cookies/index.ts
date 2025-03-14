import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact } from '../types'

defineCustomElement('sinch-icon-branded-cookies', createIconClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-branded-cookies': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-cookies': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-cookies': TSinchIconBrandedReact,
    }
  }
}
