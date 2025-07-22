import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPages = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pages', IconPages)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pages': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pages': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pages': TSinchIconReact,
    }
  }
}
