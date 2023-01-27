import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-pest-control-rodent', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pest-control-rodent': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-pest-control-rodent': TSinchIconElement,
  }
}
