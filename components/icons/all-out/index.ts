import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-all-out', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-all-out': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-all-out': TSinchIconElement,
  }
}
