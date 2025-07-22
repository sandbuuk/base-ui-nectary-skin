import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconReport = createIconClass(templateHTML)
defineCustomElement('sinch-icon-report', IconReport)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-report': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-report': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-report': TSinchIconReact,
    }
  }
}
