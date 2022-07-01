import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-call-split', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-call-split': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-call-split': TSinchIconElement,
  }
}
