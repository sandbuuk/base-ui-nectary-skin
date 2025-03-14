import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact } from '../types'

defineCustomElement('sinch-icon-branded-calling-api', createIconClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-branded-calling-api': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-calling-api': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-calling-api': TSinchIconBrandedReact,
    }
  }
}
