import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-mouse', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mouse': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-mouse': TSinchIconElement,
  }
}
