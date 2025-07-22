import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalMovies = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-movies', IconLocalMovies)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-movies': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-movies': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-movies': TSinchIconReact,
    }
  }
}
