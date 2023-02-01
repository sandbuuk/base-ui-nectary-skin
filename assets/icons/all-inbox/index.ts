import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-all-inbox', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-all-inbox': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-all-inbox': TSinchIconElement,
  }
}
