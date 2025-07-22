import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStars = createIconClass(templateHTML)
defineCustomElement('sinch-icon-stars', IconStars)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-stars': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stars': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-stars': TSinchIconReact,
    }
  }
}
