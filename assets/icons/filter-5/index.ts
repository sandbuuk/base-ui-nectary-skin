import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFilter5 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-filter-5', IconFilter5)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-filter-5': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-filter-5': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-filter-5': TSinchIconReact,
    }
  }
}
