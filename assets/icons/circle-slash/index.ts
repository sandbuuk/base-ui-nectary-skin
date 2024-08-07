
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-circle-slash', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-circle-slash': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-circle-slash': TSinchIconElement,
  }
}
