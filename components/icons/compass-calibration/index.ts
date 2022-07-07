import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-compass-calibration', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-compass-calibration': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-compass-calibration': TSinchIconElement,
  }
}
