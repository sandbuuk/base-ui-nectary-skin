import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconElectricScooter = createIconClass(templateHTML)
defineCustomElement('sinch-icon-electric-scooter', IconElectricScooter)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-electric-scooter': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-electric-scooter': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-electric-scooter': TSinchIconReact,
    }
  }
}
