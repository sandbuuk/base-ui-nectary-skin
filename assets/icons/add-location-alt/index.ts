import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-add-location-alt', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-location-alt': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-add-location-alt': TSinchIconElement,
  }
}
