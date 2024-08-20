import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-notification-important', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-notification-important': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-notification-important': TSinchIconElement,
  }
}
