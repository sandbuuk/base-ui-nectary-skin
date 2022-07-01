import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-domain-verification', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-domain-verification': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-domain-verification': TSinchIconElement,
  }
}
