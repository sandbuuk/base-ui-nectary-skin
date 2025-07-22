import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTrendingDown = createIconClass(templateHTML)
defineCustomElement('sinch-icon-trending-down', IconTrendingDown)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-trending-down': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-trending-down': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-trending-down': TSinchIconReact,
    }
  }
}
