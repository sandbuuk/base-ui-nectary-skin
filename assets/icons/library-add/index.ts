import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLibraryAdd = createIconClass(templateHTML)
defineCustomElement('sinch-icon-library-add', IconLibraryAdd)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-library-add': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-library-add': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-library-add': TSinchIconReact,
    }
  }
}
