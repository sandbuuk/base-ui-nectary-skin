import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFavorite = createIconClass(templateHTML)
defineCustomElement('sinch-icon-favorite', IconFavorite)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-favorite': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-favorite': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-favorite': TSinchIconReact,
    }
  }
}
