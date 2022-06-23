import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-contact-support', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-contact-support': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-contact-support': TSinchIconElement,
  }
}
