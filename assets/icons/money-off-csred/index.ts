import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMoneyOffCsred = createIconClass(templateHTML)
defineCustomElement('sinch-icon-money-off-csred', IconMoneyOffCsred)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-money-off-csred': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-money-off-csred': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-money-off-csred': TSinchIconReact,
    }
  }
}
