import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact } from '../types'

defineCustomElement('sinch-icon-branded-direction', createIconClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-branded-direction': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-direction': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-direction': TSinchIconBrandedReact,
    }
  }
}
