import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-straighten', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-straighten': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-straighten': TSinchIconElement,
  }
}
