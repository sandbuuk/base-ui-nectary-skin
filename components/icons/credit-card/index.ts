import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-credit-card', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-credit-card': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-credit-card': TSinchIconElement,
  }
}
