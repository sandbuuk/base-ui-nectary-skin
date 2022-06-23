import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-assignment-returned', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-assignment-returned': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-assignment-returned': TSinchIconElement,
  }
}
