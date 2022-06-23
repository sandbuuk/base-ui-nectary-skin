import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-text-rotation-angledown', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-text-rotation-angledown': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-text-rotation-angledown': TSinchIconElement,
  }
}
