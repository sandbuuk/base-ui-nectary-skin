import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-king-bed', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-king-bed': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-king-bed': TSinchIconElement,
  }
}
