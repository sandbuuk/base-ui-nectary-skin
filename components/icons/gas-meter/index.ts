import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-gas-meter', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-gas-meter': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-gas-meter': TSinchIconElement,
  }
}
