import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStarOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-star-outline', IconStarOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-star-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-star-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-star-outline': TSinchIconReact,
    }
  }
}
