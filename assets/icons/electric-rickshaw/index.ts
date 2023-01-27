import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-electric-rickshaw', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-electric-rickshaw': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-electric-rickshaw': TSinchIconElement,
  }
}
