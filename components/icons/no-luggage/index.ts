import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-no-luggage', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-no-luggage': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-no-luggage': TSinchIconElement,
  }
}
