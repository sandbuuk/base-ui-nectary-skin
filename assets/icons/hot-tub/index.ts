import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-hot-tub', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hot-tub': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-hot-tub': TSinchIconElement,
  }
}
