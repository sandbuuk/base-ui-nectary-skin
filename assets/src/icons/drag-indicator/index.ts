import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-drag-indicator', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-drag-indicator': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-drag-indicator': TSinchIconElement,
  }
}
