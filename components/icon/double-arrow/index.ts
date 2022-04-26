import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-double-arrow', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-double-arrow': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-double-arrow': TSinchIconElement,
  }
}
