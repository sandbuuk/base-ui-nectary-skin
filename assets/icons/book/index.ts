import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBook = createIconClass(templateHTML)
defineCustomElement('sinch-icon-book', IconBook)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-book': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-book': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-book': TSinchIconReact,
    }
  }
}
