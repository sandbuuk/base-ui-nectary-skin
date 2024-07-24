import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-location-disabled', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-location-disabled': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-location-disabled': TSinchIconElement,
  }
}
