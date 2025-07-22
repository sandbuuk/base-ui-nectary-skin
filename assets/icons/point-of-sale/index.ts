import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPointOfSale = createIconClass(templateHTML)
defineCustomElement('sinch-icon-point-of-sale', IconPointOfSale)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-point-of-sale': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-point-of-sale': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-point-of-sale': TSinchIconReact,
    }
  }
}
