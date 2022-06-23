import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-card-membership', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-card-membership': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-card-membership': TSinchIconElement,
  }
}
