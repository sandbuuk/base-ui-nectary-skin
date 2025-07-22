import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRotateLeft = createIconClass(templateHTML)
defineCustomElement('sinch-icon-rotate-left', IconRotateLeft)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-rotate-left': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rotate-left': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-rotate-left': TSinchIconReact,
    }
  }
}
