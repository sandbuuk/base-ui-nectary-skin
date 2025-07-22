import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDoubleArrow = createIconClass(templateHTML)
defineCustomElement('sinch-icon-double-arrow', IconDoubleArrow)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-double-arrow': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-double-arrow': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-double-arrow': TSinchIconReact,
    }
  }
}
