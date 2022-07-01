import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-sd-storage', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sd-storage': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-sd-storage': TSinchIconElement,
  }
}
