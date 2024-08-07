
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-lock-keyhole-waves', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-lock-keyhole-waves': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-lock-keyhole-waves': TSinchIconElement,
  }
}
