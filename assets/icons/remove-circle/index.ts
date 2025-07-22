import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRemoveCircle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-remove-circle', IconRemoveCircle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-remove-circle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-remove-circle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-remove-circle': TSinchIconReact,
    }
  }
}
