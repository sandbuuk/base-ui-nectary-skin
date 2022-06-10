import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-auto-delete', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-auto-delete': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-auto-delete': TSinchIconElement,
  }
}
