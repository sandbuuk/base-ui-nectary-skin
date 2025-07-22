import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGridOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-grid-off', IconGridOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-grid-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-grid-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-grid-off': TSinchIconReact,
    }
  }
}
