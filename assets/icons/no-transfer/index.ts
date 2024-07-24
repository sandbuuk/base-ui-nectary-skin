import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-no-transfer', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-no-transfer': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-no-transfer': TSinchIconElement,
  }
}
