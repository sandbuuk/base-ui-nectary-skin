import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBookOnline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-book-online', IconBookOnline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-book-online': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-book-online': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-book-online': TSinchIconReact,
    }
  }
}
