import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-bar-chart', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-bar-chart': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-bar-chart': TSinchIconElement,
  }
}
