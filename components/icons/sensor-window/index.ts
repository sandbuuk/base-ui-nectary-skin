import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-sensor-window', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sensor-window': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-sensor-window': TSinchIconElement,
  }
}
