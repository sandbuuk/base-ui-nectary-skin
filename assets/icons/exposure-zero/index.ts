import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-exposure-zero', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-exposure-zero': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-exposure-zero': TSinchIconElement,
  }
}
