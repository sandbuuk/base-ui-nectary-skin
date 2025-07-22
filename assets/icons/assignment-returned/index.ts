import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAssignmentReturned = createIconClass(templateHTML)
defineCustomElement('sinch-icon-assignment-returned', IconAssignmentReturned)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-assignment-returned': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-assignment-returned': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-assignment-returned': TSinchIconReact,
    }
  }
}
