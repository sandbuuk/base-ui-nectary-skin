import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAllInbox = createIconClass(templateHTML)
defineCustomElement('sinch-icon-all-inbox', IconAllInbox)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-all-inbox': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-all-inbox': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-all-inbox': TSinchIconReact,
    }
  }
}
