import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-fiber-pin', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fiber-pin': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-fiber-pin': TSinchIconElement,
  }
}
