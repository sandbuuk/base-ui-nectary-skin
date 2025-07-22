import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPrint = createIconClass(templateHTML)
defineCustomElement('sinch-icon-print', IconPrint)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-print': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-print': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-print': TSinchIconReact,
    }
  }
}
