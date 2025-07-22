import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCallReceived = createIconClass(templateHTML)
defineCustomElement('sinch-icon-call-received', IconCallReceived)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-call-received': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-call-received': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-call-received': TSinchIconReact,
    }
  }
}
