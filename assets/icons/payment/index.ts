import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPayment = createIconClass(templateHTML)
defineCustomElement('sinch-icon-payment', IconPayment)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-payment': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-payment': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-payment': TSinchIconReact,
    }
  }
}
