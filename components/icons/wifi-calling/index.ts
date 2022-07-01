import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-wifi-calling', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wifi-calling': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-wifi-calling': TSinchIconElement,
  }
}
