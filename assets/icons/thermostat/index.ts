import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconThermostat = createIconClass(templateHTML)
defineCustomElement('sinch-icon-thermostat', IconThermostat)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-thermostat': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-thermostat': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-thermostat': TSinchIconReact,
    }
  }
}
