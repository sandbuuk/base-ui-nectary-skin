import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStarHalf = createIconClass(templateHTML)
defineCustomElement('sinch-icon-star-half', IconStarHalf)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-star-half': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-star-half': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-star-half': TSinchIconReact,
    }
  }
}
