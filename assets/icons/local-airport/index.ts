import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalAirport = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-airport', IconLocalAirport)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-airport': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-airport': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-airport': TSinchIconReact,
    }
  }
}
