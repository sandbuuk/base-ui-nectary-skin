import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-keyboard-double-arrow-left', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-keyboard-double-arrow-left': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-keyboard-double-arrow-left': TSinchIconElement,
  }
}
