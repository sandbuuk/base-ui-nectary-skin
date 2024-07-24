import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-shopping-cart', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-shopping-cart': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-shopping-cart': TSinchIconElement,
  }
}
