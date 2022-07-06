import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-rotate-90-degrees-ccw', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rotate-90-degrees-ccw': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-rotate-90-degrees-ccw': TSinchIconElement,
  }
}
