import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFilterAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-filter-alt', IconFilterAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-filter-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-filter-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-filter-alt': TSinchIconReact,
    }
  }
}
