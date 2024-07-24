import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-restaurant-menu', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-restaurant-menu': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-restaurant-menu': TSinchIconElement,
  }
}
