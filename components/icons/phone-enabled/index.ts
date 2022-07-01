import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-phone-enabled', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-phone-enabled': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-phone-enabled': TSinchIconElement,
  }
}
