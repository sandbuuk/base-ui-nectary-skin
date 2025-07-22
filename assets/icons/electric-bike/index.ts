import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconElectricBike = createIconClass(templateHTML)
defineCustomElement('sinch-icon-electric-bike', IconElectricBike)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-electric-bike': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-electric-bike': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-electric-bike': TSinchIconReact,
    }
  }
}
