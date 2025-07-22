import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconKeyboardCapslock = createIconClass(templateHTML)
defineCustomElement('sinch-icon-keyboard-capslock', IconKeyboardCapslock)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-keyboard-capslock': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-keyboard-capslock': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-keyboard-capslock': TSinchIconReact,
    }
  }
}
