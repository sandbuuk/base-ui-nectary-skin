import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-alarm-off', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-alarm-off': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-alarm-off': TSinchIconElement,
  }
}
