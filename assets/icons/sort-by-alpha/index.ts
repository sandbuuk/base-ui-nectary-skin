import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-sort-by-alpha', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sort-by-alpha': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-sort-by-alpha': TSinchIconElement,
  }
}
