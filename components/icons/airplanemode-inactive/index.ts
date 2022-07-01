import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-airplanemode-inactive', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-airplanemode-inactive': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-airplanemode-inactive': TSinchIconElement,
  }
}
