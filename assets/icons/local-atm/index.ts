import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalAtm = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-atm', IconLocalAtm)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-atm': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-atm': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-atm': TSinchIconReact,
    }
  }
}
