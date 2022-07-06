import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-transit-enterexit', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-transit-enterexit': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-transit-enterexit': TSinchIconElement,
  }
}
