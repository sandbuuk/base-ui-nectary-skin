import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-perm-identity', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-perm-identity': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-perm-identity': TSinchIconElement,
  }
}
