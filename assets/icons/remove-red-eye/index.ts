import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRemoveRedEye = createIconClass(templateHTML)
defineCustomElement('sinch-icon-remove-red-eye', IconRemoveRedEye)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-remove-red-eye': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-remove-red-eye': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-remove-red-eye': TSinchIconReact,
    }
  }
}
