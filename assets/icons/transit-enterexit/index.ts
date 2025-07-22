import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTransitEnterexit = createIconClass(templateHTML)
defineCustomElement('sinch-icon-transit-enterexit', IconTransitEnterexit)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-transit-enterexit': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-transit-enterexit': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-transit-enterexit': TSinchIconReact,
    }
  }
}
