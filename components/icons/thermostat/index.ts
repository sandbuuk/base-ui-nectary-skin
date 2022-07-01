import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-thermostat', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-thermostat': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-thermostat': TSinchIconElement,
  }
}
