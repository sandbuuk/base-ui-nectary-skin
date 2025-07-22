import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconKeyboardDoubleArrowLeft = createIconClass(templateHTML)
defineCustomElement('sinch-icon-keyboard-double-arrow-left', IconKeyboardDoubleArrowLeft)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-keyboard-double-arrow-left': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-keyboard-double-arrow-left': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-keyboard-double-arrow-left': TSinchIconReact,
    }
  }
}
