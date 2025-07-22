import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPedalBike = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pedal-bike', IconPedalBike)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pedal-bike': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pedal-bike': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pedal-bike': TSinchIconReact,
    }
  }
}
