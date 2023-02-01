import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-wrong-location', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wrong-location': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-wrong-location': TSinchIconElement,
  }
}
