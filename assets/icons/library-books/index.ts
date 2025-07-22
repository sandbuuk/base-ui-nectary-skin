import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLibraryBooks = createIconClass(templateHTML)
defineCustomElement('sinch-icon-library-books', IconLibraryBooks)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-library-books': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-library-books': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-library-books': TSinchIconReact,
    }
  }
}
