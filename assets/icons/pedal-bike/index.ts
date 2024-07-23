import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-pedal-bike', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pedal-bike': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-pedal-bike': TSinchIconElement,
  }
}
