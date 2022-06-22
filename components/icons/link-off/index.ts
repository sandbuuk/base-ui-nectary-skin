import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-link-off', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-link-off': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-link-off': TSinchIconElement,
  }
}
