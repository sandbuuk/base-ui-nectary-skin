import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-sim-card', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sim-card': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-sim-card': TSinchIconElement,
  }
}
