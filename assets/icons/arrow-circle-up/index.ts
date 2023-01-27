import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-arrow-circle-up', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-circle-up': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-circle-up': TSinchIconElement,
  }
}
