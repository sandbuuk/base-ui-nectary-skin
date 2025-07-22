import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLibraryMusic = createIconClass(templateHTML)
defineCustomElement('sinch-icon-library-music', IconLibraryMusic)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-library-music': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-library-music': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-library-music': TSinchIconReact,
    }
  }
}
