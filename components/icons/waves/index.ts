import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-waves', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-waves': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-waves': TSinchIconElement,
  }
}
