import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMovieFilter = createIconClass(templateHTML)
defineCustomElement('sinch-icon-movie-filter', IconMovieFilter)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-movie-filter': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-movie-filter': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-movie-filter': TSinchIconReact,
    }
  }
}
