import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-connect-without-contact', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-connect-without-contact': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-connect-without-contact': TSinchIconElement,
  }
}
