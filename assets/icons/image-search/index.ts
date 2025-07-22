import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconImageSearch = createIconClass(templateHTML)
defineCustomElement('sinch-icon-image-search', IconImageSearch)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-image-search': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-image-search': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-image-search': TSinchIconReact,
    }
  }
}
