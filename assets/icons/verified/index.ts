import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVerified = createIconClass(templateHTML)
defineCustomElement('sinch-icon-verified', IconVerified)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-verified': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-verified': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-verified': TSinchIconReact,
    }
  }
}
