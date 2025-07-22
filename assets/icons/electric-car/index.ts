import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconElectricCar = createIconClass(templateHTML)
defineCustomElement('sinch-icon-electric-car', IconElectricCar)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-electric-car': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-electric-car': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-electric-car': TSinchIconReact,
    }
  }
}
