import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCheck = createIconClass(templateHTML)
defineCustomElement('sinch-icon-check', IconCheck)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-check': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-check': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-check': TSinchIconReact,
    }
  }
}
