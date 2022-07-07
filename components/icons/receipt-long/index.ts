import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-receipt-long', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-receipt-long': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-receipt-long': TSinchIconElement,
  }
}
