import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-warning-amber', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-warning-amber': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-warning-amber': TSinchIconElement,
  }
}
