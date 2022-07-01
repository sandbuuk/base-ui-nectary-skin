import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-swap-calls', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-swap-calls': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-swap-calls': TSinchIconElement,
  }
}
