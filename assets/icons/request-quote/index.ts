import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRequestQuote = createIconClass(templateHTML)
defineCustomElement('sinch-icon-request-quote', IconRequestQuote)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-request-quote': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-request-quote': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-request-quote': TSinchIconReact,
    }
  }
}
