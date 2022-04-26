import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-attach-email', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-attach-email': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-attach-email': TSinchIconElement,
  }
}
