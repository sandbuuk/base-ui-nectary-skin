import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMoney = createIconClass(templateHTML)
defineCustomElement('sinch-icon-money', IconMoney)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-money': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-money': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-money': TSinchIconReact,
    }
  }
}
