import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCategory = createIconClass(templateHTML)
defineCustomElement('sinch-icon-category', IconCategory)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-category': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-category': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-category': TSinchIconReact,
    }
  }
}
