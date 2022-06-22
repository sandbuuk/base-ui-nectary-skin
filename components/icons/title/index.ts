import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-title', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-title': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-title': TSinchIconElement,
  }
}
