import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconShoppingBasket = createIconClass(templateHTML)
defineCustomElement('sinch-icon-shopping-basket', IconShoppingBasket)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-shopping-basket': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-shopping-basket': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-shopping-basket': TSinchIconReact,
    }
  }
}
