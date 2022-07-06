import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-exposure-plus-1', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-exposure-plus-1': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-exposure-plus-1': TSinchIconElement,
  }
}
