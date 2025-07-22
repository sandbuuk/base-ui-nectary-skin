import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconReceipt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-receipt', IconReceipt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-receipt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-receipt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-receipt': TSinchIconReact,
    }
  }
}
