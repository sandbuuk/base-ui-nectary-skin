import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-mark-email-unread', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mark-email-unread': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-mark-email-unread': TSinchIconElement,
  }
}
