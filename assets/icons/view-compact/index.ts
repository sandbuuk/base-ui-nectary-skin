import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-view-compact', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-compact': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-view-compact': TSinchIconElement,
  }
}
