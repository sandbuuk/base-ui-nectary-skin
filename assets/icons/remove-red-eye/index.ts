import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-remove-red-eye', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-remove-red-eye': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-remove-red-eye': TSinchIconElement,
  }
}
