import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFilter7 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-filter-7', IconFilter7)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-filter-7': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-filter-7': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-filter-7': TSinchIconReact,
    }
  }
}
