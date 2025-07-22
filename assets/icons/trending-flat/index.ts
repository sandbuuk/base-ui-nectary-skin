import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTrendingFlat = createIconClass(templateHTML)
defineCustomElement('sinch-icon-trending-flat', IconTrendingFlat)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-trending-flat': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-trending-flat': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-trending-flat': TSinchIconReact,
    }
  }
}
