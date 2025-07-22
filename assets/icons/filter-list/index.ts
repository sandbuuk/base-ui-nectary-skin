import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFilterList = createIconClass(templateHTML)
defineCustomElement('sinch-icon-filter-list', IconFilterList)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-filter-list': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-filter-list': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-filter-list': TSinchIconReact,
    }
  }
}
