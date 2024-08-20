import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-perm-scan-wifi', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-perm-scan-wifi': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-perm-scan-wifi': TSinchIconElement,
  }
}
