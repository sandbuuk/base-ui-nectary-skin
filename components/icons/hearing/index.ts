import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-hearing', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hearing': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-hearing': TSinchIconElement,
  }
}
