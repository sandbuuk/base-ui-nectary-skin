import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFeedback = createIconClass(templateHTML)
defineCustomElement('sinch-icon-feedback', IconFeedback)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-feedback': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-feedback': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-feedback': TSinchIconReact,
    }
  }
}
