import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBackspace = createIconClass(templateHTML)
defineCustomElement('sinch-icon-backspace', IconBackspace)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-backspace': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-backspace': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-backspace': TSinchIconReact,
    }
  }
}
