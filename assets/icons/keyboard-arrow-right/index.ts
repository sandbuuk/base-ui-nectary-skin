import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconKeyboardArrowRight = createIconClass(templateHTML)
defineCustomElement('sinch-icon-keyboard-arrow-right', IconKeyboardArrowRight)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-keyboard-arrow-right': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-keyboard-arrow-right': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-keyboard-arrow-right': TSinchIconReact,
    }
  }
}
