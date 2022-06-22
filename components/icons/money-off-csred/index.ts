import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-money-off-csred', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-money-off-csred': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-money-off-csred': TSinchIconElement,
  }
}
