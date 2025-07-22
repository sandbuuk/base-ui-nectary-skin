import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAirportShuttle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-airport-shuttle', IconAirportShuttle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-airport-shuttle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-airport-shuttle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-airport-shuttle': TSinchIconReact,
    }
  }
}
