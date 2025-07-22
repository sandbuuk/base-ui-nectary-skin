import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAssignmentLate = createIconClass(templateHTML)
defineCustomElement('sinch-icon-assignment-late', IconAssignmentLate)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-assignment-late': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-assignment-late': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-assignment-late': TSinchIconReact,
    }
  }
}
