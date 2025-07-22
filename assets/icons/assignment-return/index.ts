import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAssignmentReturn = createIconClass(templateHTML)
defineCustomElement('sinch-icon-assignment-return', IconAssignmentReturn)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-assignment-return': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-assignment-return': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-assignment-return': TSinchIconReact,
    }
  }
}
