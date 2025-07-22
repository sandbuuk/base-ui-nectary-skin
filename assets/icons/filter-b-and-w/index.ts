import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFilterBAndW = createIconClass(templateHTML)
defineCustomElement('sinch-icon-filter-b-and-w', IconFilterBAndW)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-filter-b-and-w': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-filter-b-and-w': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-filter-b-and-w': TSinchIconReact,
    }
  }
}
