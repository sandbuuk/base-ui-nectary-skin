import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGamepad = createIconClass(templateHTML)
defineCustomElement('sinch-icon-gamepad', IconGamepad)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-gamepad': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-gamepad': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-gamepad': TSinchIconReact,
    }
  }
}
