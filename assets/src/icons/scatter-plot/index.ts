import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-scatter-plot', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-scatter-plot': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-scatter-plot': TSinchIconElement,
  }
}
