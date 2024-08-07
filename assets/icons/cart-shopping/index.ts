
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-cart-shopping', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cart-shopping': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-cart-shopping': TSinchIconElement,
  }
}
