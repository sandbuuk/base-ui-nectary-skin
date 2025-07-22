import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconKeyboard = createIconClass(templateHTML)
defineCustomElement('sinch-icon-keyboard', IconKeyboard)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-keyboard': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-keyboard': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-keyboard': TSinchIconReact,
    }
  }
}
