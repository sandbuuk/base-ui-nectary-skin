import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCreditCard = createIconClass(templateHTML)
defineCustomElement('sinch-icon-credit-card', IconCreditCard)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-credit-card': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-credit-card': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-credit-card': TSinchIconReact,
    }
  }
}
