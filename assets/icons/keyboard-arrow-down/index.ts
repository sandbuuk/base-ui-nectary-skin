import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconKeyboardArrowDown = createIconClass(templateHTML)
defineCustomElement('sinch-icon-keyboard-arrow-down', IconKeyboardArrowDown)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-keyboard-arrow-down': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-keyboard-arrow-down': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-keyboard-arrow-down': TSinchIconReact,
    }
  }
}
