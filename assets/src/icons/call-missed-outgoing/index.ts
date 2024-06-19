import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-call-missed-outgoing', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-call-missed-outgoing': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-call-missed-outgoing': TSinchIconElement,
  }
}
