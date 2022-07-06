import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-sensor-occupied', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sensor-occupied': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-sensor-occupied': TSinchIconElement,
  }
}
