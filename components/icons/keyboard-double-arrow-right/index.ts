import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-keyboard-double-arrow-right', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-keyboard-double-arrow-right': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-keyboard-double-arrow-right': TSinchIconElement,
  }
}
