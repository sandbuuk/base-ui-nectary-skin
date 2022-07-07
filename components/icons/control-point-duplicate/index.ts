import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-control-point-duplicate', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-control-point-duplicate': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-control-point-duplicate': TSinchIconElement,
  }
}
