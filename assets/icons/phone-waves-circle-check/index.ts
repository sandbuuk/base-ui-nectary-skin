
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-phone-waves-circle-check', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-phone-waves-circle-check': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-phone-waves-circle-check': TSinchIconElement,
  }
}
