import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-wifi-tethering', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wifi-tethering': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-wifi-tethering': TSinchIconElement,
  }
}
