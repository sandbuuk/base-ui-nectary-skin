import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconKeyboardHide = createIconClass(templateHTML)
defineCustomElement('sinch-icon-keyboard-hide', IconKeyboardHide)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-keyboard-hide': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-keyboard-hide': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-keyboard-hide': TSinchIconReact,
    }
  }
}
