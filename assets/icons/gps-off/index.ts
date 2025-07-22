import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGpsOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-gps-off', IconGpsOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-gps-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-gps-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-gps-off': TSinchIconReact,
    }
  }
}
