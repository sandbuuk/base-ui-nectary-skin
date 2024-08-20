import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-print-disabled', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-print-disabled': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-print-disabled': TSinchIconElement,
  }
}
