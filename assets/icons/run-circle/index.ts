import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRunCircle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-run-circle', IconRunCircle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-run-circle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-run-circle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-run-circle': TSinchIconReact,
    }
  }
}
