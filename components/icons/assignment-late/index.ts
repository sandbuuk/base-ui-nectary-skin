import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-assignment-late', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-assignment-late': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-assignment-late': TSinchIconElement,
  }
}
