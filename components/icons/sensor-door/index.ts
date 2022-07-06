import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-sensor-door', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sensor-door': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-sensor-door': TSinchIconElement,
  }
}
