
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-text-lines', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-text-lines': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-text-lines': TSinchIconElement,
  }
}
