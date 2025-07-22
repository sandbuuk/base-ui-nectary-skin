import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStorefront = createIconClass(templateHTML)
defineCustomElement('sinch-icon-storefront', IconStorefront)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-storefront': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-storefront': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-storefront': TSinchIconReact,
    }
  }
}
