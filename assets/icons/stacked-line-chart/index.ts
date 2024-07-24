import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-stacked-line-chart', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stacked-line-chart': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-stacked-line-chart': TSinchIconElement,
  }
}
