import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-rule', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rule': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-rule': TSinchIconElement,
  }
}
