
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-rectangle-chart-bar-down', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rectangle-chart-bar-down': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-rectangle-chart-bar-down': TSinchIconElement,
  }
}
