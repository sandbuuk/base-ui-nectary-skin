import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-house-siding', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-house-siding': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-house-siding': TSinchIconElement,
  }
}
