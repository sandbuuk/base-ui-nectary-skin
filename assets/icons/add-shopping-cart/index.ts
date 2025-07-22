import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddShoppingCart = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-shopping-cart', IconAddShoppingCart)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-shopping-cart': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-shopping-cart': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-shopping-cart': TSinchIconReact,
    }
  }
}
