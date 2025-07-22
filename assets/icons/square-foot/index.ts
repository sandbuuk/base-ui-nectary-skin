import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSquareFoot = createIconClass(templateHTML)
defineCustomElement('sinch-icon-square-foot', IconSquareFoot)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-square-foot': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-square-foot': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-square-foot': TSinchIconReact,
    }
  }
}
