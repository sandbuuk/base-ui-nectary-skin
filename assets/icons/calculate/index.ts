import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCalculate = createIconClass(templateHTML)
defineCustomElement('sinch-icon-calculate', IconCalculate)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-calculate': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-calculate': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-calculate': TSinchIconReact,
    }
  }
}
