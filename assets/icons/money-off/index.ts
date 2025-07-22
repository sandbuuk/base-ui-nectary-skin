import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMoneyOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-money-off', IconMoneyOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-money-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-money-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-money-off': TSinchIconReact,
    }
  }
}
