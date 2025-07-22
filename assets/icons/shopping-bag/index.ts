import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconShoppingBag = createIconClass(templateHTML)
defineCustomElement('sinch-icon-shopping-bag', IconShoppingBag)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-shopping-bag': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-shopping-bag': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-shopping-bag': TSinchIconReact,
    }
  }
}
