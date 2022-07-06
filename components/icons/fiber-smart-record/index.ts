import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-fiber-smart-record', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fiber-smart-record': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-fiber-smart-record': TSinchIconElement,
  }
}
