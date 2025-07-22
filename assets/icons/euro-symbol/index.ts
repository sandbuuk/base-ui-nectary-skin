import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEuroSymbol = createIconClass(templateHTML)
defineCustomElement('sinch-icon-euro-symbol', IconEuroSymbol)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-euro-symbol': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-euro-symbol': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-euro-symbol': TSinchIconReact,
    }
  }
}
