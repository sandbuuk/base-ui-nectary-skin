import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStarBorder = createIconClass(templateHTML)
defineCustomElement('sinch-icon-star-border', IconStarBorder)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-star-border': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-star-border': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-star-border': TSinchIconReact,
    }
  }
}
