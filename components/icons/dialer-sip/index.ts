import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-dialer-sip', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-dialer-sip': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-dialer-sip': TSinchIconElement,
  }
}
