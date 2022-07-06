import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-energy-savings-leaf', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-energy-savings-leaf': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-energy-savings-leaf': TSinchIconElement,
  }
}
