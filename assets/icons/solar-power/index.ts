import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-solar-power', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-solar-power': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-solar-power': TSinchIconElement,
  }
}
