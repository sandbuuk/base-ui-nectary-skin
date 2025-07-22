import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconKeyboardArrowLeft = createIconClass(templateHTML)
defineCustomElement('sinch-icon-keyboard-arrow-left', IconKeyboardArrowLeft)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-keyboard-arrow-left': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-keyboard-arrow-left': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-keyboard-arrow-left': TSinchIconReact,
    }
  }
}
