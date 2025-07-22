import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRemoveShoppingCart = createIconClass(templateHTML)
defineCustomElement('sinch-icon-remove-shopping-cart', IconRemoveShoppingCart)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-remove-shopping-cart': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-remove-shopping-cart': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-remove-shopping-cart': TSinchIconReact,
    }
  }
}
