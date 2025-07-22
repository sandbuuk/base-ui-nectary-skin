import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCheckCircle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-check-circle', IconCheckCircle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-check-circle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-check-circle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-check-circle': TSinchIconReact,
    }
  }
}
