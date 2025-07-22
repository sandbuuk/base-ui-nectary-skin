import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWarning = createIconClass(templateHTML)
defineCustomElement('sinch-icon-warning', IconWarning)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-warning': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-warning': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-warning': TSinchIconReact,
    }
  }
}
