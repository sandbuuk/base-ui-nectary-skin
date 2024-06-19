import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-add-shopping-cart', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-shopping-cart': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-add-shopping-cart': TSinchIconElement,
  }
}
