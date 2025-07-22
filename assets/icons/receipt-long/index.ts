import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconReceiptLong = createIconClass(templateHTML)
defineCustomElement('sinch-icon-receipt-long', IconReceiptLong)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-receipt-long': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-receipt-long': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-receipt-long': TSinchIconReact,
    }
  }
}
