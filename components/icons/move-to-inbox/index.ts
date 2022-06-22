import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-move-to-inbox', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-move-to-inbox': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-move-to-inbox': TSinchIconElement,
  }
}
