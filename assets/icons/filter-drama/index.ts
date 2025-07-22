import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFilterDrama = createIconClass(templateHTML)
defineCustomElement('sinch-icon-filter-drama', IconFilterDrama)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-filter-drama': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-filter-drama': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-filter-drama': TSinchIconReact,
    }
  }
}
