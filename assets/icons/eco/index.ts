import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEco = createIconClass(templateHTML)
defineCustomElement('sinch-icon-eco', IconEco)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-eco': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-eco': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-eco': TSinchIconReact,
    }
  }
}
