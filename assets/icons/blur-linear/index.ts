import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBlurLinear = createIconClass(templateHTML)
defineCustomElement('sinch-icon-blur-linear', IconBlurLinear)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-blur-linear': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-blur-linear': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-blur-linear': TSinchIconReact,
    }
  }
}
