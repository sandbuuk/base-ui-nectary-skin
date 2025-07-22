import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNotAccessible = createIconClass(templateHTML)
defineCustomElement('sinch-icon-not-accessible', IconNotAccessible)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-not-accessible': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-not-accessible': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-not-accessible': TSinchIconReact,
    }
  }
}
