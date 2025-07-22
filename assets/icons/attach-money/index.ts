import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAttachMoney = createIconClass(templateHTML)
defineCustomElement('sinch-icon-attach-money', IconAttachMoney)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-attach-money': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-attach-money': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-attach-money': TSinchIconReact,
    }
  }
}
