import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-account-balance', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-account-balance': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-account-balance': TSinchIconElement,
  }
}
