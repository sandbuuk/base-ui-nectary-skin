import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconReadMore = createIconClass(templateHTML)
defineCustomElement('sinch-icon-read-more', IconReadMore)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-read-more': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-read-more': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-read-more': TSinchIconReact,
    }
  }
}
