import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-multiline-chart', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-multiline-chart': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-multiline-chart': TSinchIconElement,
  }
}
