import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMarkEmailRead = createIconClass(templateHTML)
defineCustomElement('sinch-icon-mark-email-read', IconMarkEmailRead)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-mark-email-read': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mark-email-read': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-mark-email-read': TSinchIconReact,
    }
  }
}
