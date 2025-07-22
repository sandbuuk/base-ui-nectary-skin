import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSubscript = createIconClass(templateHTML)
defineCustomElement('sinch-icon-subscript', IconSubscript)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-subscript': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-subscript': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-subscript': TSinchIconReact,
    }
  }
}
