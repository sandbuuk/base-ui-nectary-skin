import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-heat-pump', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-heat-pump': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-heat-pump': TSinchIconElement,
  }
}
