import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-contact-mail', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-contact-mail': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-contact-mail': TSinchIconElement,
  }
}
