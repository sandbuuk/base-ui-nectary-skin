import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAttachEmail = createIconClass(templateHTML)
defineCustomElement('sinch-icon-attach-email', IconAttachEmail)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-attach-email': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-attach-email': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-attach-email': TSinchIconReact,
    }
  }
}
