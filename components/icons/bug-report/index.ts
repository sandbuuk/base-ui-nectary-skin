import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-bug-report', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-bug-report': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-bug-report': TSinchIconElement,
  }
}
