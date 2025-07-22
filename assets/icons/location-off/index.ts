import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocationOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-location-off', IconLocationOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-location-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-location-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-location-off': TSinchIconReact,
    }
  }
}
