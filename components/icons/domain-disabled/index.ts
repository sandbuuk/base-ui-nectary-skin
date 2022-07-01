import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-domain-disabled', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-domain-disabled': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-domain-disabled': TSinchIconElement,
  }
}
