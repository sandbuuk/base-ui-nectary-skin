import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-mark-email-read', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mark-email-read': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-mark-email-read': TSinchIconElement,
  }
}
