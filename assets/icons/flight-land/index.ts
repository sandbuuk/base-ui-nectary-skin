import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFlightLand = createIconClass(templateHTML)
defineCustomElement('sinch-icon-flight-land', IconFlightLand)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-flight-land': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flight-land': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-flight-land': TSinchIconReact,
    }
  }
}
