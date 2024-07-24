import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-call-to-action', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-call-to-action': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-call-to-action': TSinchIconElement,
  }
}
