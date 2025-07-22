import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconContentCopy = createIconClass(templateHTML)
defineCustomElement('sinch-icon-content-copy', IconContentCopy)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-content-copy': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-content-copy': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-content-copy': TSinchIconReact,
    }
  }
}
