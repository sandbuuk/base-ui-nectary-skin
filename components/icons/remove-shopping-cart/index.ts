import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-remove-shopping-cart', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-remove-shopping-cart': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-remove-shopping-cart': TSinchIconElement,
  }
}
