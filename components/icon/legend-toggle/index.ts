import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-legend-toggle', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-legend-toggle': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-legend-toggle': TSinchIconElement,
  }
}
