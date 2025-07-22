import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAssignment = createIconClass(templateHTML)
defineCustomElement('sinch-icon-assignment', IconAssignment)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-assignment': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-assignment': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-assignment': TSinchIconReact,
    }
  }
}
