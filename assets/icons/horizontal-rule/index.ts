import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-horizontal-rule', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-horizontal-rule': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-horizontal-rule': TSinchIconElement,
  }
}
