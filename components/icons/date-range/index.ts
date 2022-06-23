import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-date-range', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-date-range': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-date-range': TSinchIconElement,
  }
}
