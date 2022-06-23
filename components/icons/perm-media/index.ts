import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-perm-media', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-perm-media': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-perm-media': TSinchIconElement,
  }
}
