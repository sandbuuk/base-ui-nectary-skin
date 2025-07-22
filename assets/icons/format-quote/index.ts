import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatQuote = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-quote', IconFormatQuote)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-quote': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-quote': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-quote': TSinchIconReact,
    }
  }
}
