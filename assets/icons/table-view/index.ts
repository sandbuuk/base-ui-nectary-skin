import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-table-view', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-table-view': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-table-view': TSinchIconElement,
  }
}
