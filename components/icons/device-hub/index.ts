import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-device-hub', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-device-hub': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-device-hub': TSinchIconElement,
  }
}
