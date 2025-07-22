import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconShopTwo = createIconClass(templateHTML)
defineCustomElement('sinch-icon-shop-two', IconShopTwo)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-shop-two': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-shop-two': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-shop-two': TSinchIconReact,
    }
  }
}
