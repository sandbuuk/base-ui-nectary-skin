import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-published-with-changes', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-published-with-changes': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-published-with-changes': TSinchIconElement,
  }
}
