import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconKeyboardVoice = createIconClass(templateHTML)
defineCustomElement('sinch-icon-keyboard-voice', IconKeyboardVoice)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-keyboard-voice': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-keyboard-voice': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-keyboard-voice': TSinchIconReact,
    }
  }
}
