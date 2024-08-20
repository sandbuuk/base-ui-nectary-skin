import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-free-breakfast', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-free-breakfast': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-free-breakfast': TSinchIconElement,
  }
}
