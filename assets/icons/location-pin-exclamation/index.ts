
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-location-pin-exclamation', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-location-pin-exclamation': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-location-pin-exclamation': TSinchIconElement,
  }
}
