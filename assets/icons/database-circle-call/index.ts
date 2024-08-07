
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-database-circle-call', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-database-circle-call': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-database-circle-call': TSinchIconElement,
  }
}
