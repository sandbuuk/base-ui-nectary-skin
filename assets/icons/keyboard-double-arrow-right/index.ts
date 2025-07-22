import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconKeyboardDoubleArrowRight = createIconClass(templateHTML)
defineCustomElement('sinch-icon-keyboard-double-arrow-right', IconKeyboardDoubleArrowRight)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-keyboard-double-arrow-right': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-keyboard-double-arrow-right': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-keyboard-double-arrow-right': TSinchIconReact,
    }
  }
}
