import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-local-florist', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-florist': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-local-florist': TSinchIconElement,
  }
}
