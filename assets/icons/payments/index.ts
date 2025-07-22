import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPayments = createIconClass(templateHTML)
defineCustomElement('sinch-icon-payments', IconPayments)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-payments': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-payments': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-payments': TSinchIconReact,
    }
  }
}
