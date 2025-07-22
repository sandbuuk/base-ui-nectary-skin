import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAccountBalance = createIconClass(templateHTML)
defineCustomElement('sinch-icon-account-balance', IconAccountBalance)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-account-balance': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-account-balance': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-account-balance': TSinchIconReact,
    }
  }
}
