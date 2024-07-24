import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-check-circle', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-check-circle': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-check-circle': TSinchIconElement,
  }
}
