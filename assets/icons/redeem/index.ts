import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRedeem = createIconClass(templateHTML)
defineCustomElement('sinch-icon-redeem', IconRedeem)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-redeem': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-redeem': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-redeem': TSinchIconReact,
    }
  }
}
