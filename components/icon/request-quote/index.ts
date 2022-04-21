import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-request-quote', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-request-quote': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-request-quote': TSinchIconElement,
  }
}
