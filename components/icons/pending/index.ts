import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-pending', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pending': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-pending': TSinchIconElement,
  }
}
