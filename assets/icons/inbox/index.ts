import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconInbox = createIconClass(templateHTML)
defineCustomElement('sinch-icon-inbox', IconInbox)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-inbox': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-inbox': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-inbox': TSinchIconReact,
    }
  }
}
