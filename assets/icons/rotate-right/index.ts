import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRotateRight = createIconClass(templateHTML)
defineCustomElement('sinch-icon-rotate-right', IconRotateRight)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-rotate-right': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rotate-right': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-rotate-right': TSinchIconReact,
    }
  }
}
