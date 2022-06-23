import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-perm-device-information', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-perm-device-information': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-perm-device-information': TSinchIconElement,
  }
}
