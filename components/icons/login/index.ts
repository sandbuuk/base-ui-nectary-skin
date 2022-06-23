import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-login', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-login': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-login': TSinchIconElement,
  }
}
