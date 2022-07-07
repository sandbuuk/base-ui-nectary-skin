import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-zoom-out-map', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-zoom-out-map': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-zoom-out-map': TSinchIconElement,
  }
}
