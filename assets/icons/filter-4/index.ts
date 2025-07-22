import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFilter4 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-filter-4', IconFilter4)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-filter-4': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-filter-4': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-filter-4': TSinchIconReact,
    }
  }
}
