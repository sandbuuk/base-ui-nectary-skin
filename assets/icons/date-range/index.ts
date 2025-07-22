import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDateRange = createIconClass(templateHTML)
defineCustomElement('sinch-icon-date-range', IconDateRange)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-date-range': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-date-range': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-date-range': TSinchIconReact,
    }
  }
}
