import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-history-edu', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-history-edu': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-history-edu': TSinchIconElement,
  }
}
