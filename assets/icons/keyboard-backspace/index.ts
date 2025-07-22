import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconKeyboardBackspace = createIconClass(templateHTML)
defineCustomElement('sinch-icon-keyboard-backspace', IconKeyboardBackspace)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-keyboard-backspace': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-keyboard-backspace': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-keyboard-backspace': TSinchIconReact,
    }
  }
}
