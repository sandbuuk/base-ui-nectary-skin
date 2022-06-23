import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-logout', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-logout': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-logout': TSinchIconElement,
  }
}
