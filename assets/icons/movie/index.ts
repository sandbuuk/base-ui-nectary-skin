import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMovie = createIconClass(templateHTML)
defineCustomElement('sinch-icon-movie', IconMovie)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-movie': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-movie': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-movie': TSinchIconReact,
    }
  }
}
