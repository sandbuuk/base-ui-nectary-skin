import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMenuBook = createIconClass(templateHTML)
defineCustomElement('sinch-icon-menu-book', IconMenuBook)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-menu-book': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-menu-book': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-menu-book': TSinchIconReact,
    }
  }
}
