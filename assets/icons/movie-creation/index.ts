import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMovieCreation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-movie-creation', IconMovieCreation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-movie-creation': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-movie-creation': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-movie-creation': TSinchIconReact,
    }
  }
}
