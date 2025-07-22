import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFavoriteBorder = createIconClass(templateHTML)
defineCustomElement('sinch-icon-favorite-border', IconFavoriteBorder)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-favorite-border': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-favorite-border': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-favorite-border': TSinchIconReact,
    }
  }
}
