import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-electric-moped', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-electric-moped': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-electric-moped': TSinchIconElement,
  }
}
