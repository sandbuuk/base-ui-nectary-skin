import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-qr-code-scanner', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-qr-code-scanner': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-qr-code-scanner': TSinchIconElement,
  }
}
