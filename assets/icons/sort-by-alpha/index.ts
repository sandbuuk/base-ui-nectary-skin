import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSortByAlpha = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sort-by-alpha', IconSortByAlpha)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sort-by-alpha': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sort-by-alpha': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sort-by-alpha': TSinchIconReact,
    }
  }
}
