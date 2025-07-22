import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPrintDisabled = createIconClass(templateHTML)
defineCustomElement('sinch-icon-print-disabled', IconPrintDisabled)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-print-disabled': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-print-disabled': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-print-disabled': TSinchIconReact,
    }
  }
}
