import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-table-chart', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-table-chart': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-table-chart': TSinchIconElement,
  }
}
