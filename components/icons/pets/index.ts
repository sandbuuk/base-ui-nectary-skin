import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-pets', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pets': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-pets': TSinchIconElement,
  }
}
