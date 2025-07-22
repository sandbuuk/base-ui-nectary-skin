import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHistoryEdu = createIconClass(templateHTML)
defineCustomElement('sinch-icon-history-edu', IconHistoryEdu)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-history-edu': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-history-edu': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-history-edu': TSinchIconReact,
    }
  }
}
