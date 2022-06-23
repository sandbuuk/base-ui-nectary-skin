import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-invert-colors', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-invert-colors': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-invert-colors': TSinchIconElement,
  }
}
