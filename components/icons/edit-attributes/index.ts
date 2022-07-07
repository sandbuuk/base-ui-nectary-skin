import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-edit-attributes', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-edit-attributes': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-edit-attributes': TSinchIconElement,
  }
}
