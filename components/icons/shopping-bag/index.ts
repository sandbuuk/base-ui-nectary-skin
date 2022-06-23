import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-shopping-bag', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-shopping-bag': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-shopping-bag': TSinchIconElement,
  }
}
