import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-feedback', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-feedback': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-feedback': TSinchIconElement,
  }
}
