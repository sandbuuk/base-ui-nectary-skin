import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEmail = createIconClass(templateHTML)
defineCustomElement('sinch-icon-email', IconEmail)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-email': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-email': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-email': TSinchIconReact,
    }
  }
}
