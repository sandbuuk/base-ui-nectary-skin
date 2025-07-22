import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAtm = createIconClass(templateHTML)
defineCustomElement('sinch-icon-atm', IconAtm)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-atm': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-atm': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-atm': TSinchIconReact,
    }
  }
}
