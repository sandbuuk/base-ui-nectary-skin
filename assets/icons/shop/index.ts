import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconShop = createIconClass(templateHTML)
defineCustomElement('sinch-icon-shop', IconShop)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-shop': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-shop': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-shop': TSinchIconReact,
    }
  }
}
