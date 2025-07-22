import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHistoryToggleOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-history-toggle-off', IconHistoryToggleOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-history-toggle-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-history-toggle-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-history-toggle-off': TSinchIconReact,
    }
  }
}
