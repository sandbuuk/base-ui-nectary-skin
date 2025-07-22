import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconKeyboardArrowUp = createIconClass(templateHTML)
defineCustomElement('sinch-icon-keyboard-arrow-up', IconKeyboardArrowUp)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-keyboard-arrow-up': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-keyboard-arrow-up': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-keyboard-arrow-up': TSinchIconReact,
    }
  }
}
