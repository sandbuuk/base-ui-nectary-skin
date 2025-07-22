import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTrendingUp = createIconClass(templateHTML)
defineCustomElement('sinch-icon-trending-up', IconTrendingUp)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-trending-up': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-trending-up': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-trending-up': TSinchIconReact,
    }
  }
}
