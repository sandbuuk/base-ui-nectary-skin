import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-filter-8', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-filter-8': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-filter-8': TSinchIconElement,
  }
}
