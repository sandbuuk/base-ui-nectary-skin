import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSearch = createIconClass(templateHTML)
defineCustomElement('sinch-icon-search', IconSearch)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-search': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-search': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-search': TSinchIconReact,
    }
  }
}
