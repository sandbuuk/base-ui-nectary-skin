import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-grade', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-grade': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-grade': TSinchIconElement,
  }
}
