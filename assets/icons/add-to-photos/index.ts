import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddToPhotos = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-to-photos', IconAddToPhotos)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-to-photos': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-to-photos': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-to-photos': TSinchIconReact,
    }
  }
}
