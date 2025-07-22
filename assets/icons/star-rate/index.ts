import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStarRate = createIconClass(templateHTML)
defineCustomElement('sinch-icon-star-rate', IconStarRate)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-star-rate': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-star-rate': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-star-rate': TSinchIconReact,
    }
  }
}
