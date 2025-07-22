import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAlternateEmail = createIconClass(templateHTML)
defineCustomElement('sinch-icon-alternate-email', IconAlternateEmail)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-alternate-email': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-alternate-email': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-alternate-email': TSinchIconReact,
    }
  }
}
