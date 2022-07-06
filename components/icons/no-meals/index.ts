import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-no-meals', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-no-meals': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-no-meals': TSinchIconElement,
  }
}
