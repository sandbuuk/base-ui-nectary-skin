import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBlurOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-blur-off', IconBlurOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-blur-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-blur-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-blur-off': TSinchIconReact,
    }
  }
}
