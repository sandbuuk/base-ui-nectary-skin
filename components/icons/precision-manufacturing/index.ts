import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-precision-manufacturing', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-precision-manufacturing': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-precision-manufacturing': TSinchIconElement,
  }
}
