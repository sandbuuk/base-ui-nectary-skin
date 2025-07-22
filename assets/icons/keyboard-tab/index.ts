import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconKeyboardTab = createIconClass(templateHTML)
defineCustomElement('sinch-icon-keyboard-tab', IconKeyboardTab)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-keyboard-tab': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-keyboard-tab': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-keyboard-tab': TSinchIconReact,
    }
  }
}
