import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-propane-tank', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-propane-tank': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-propane-tank': TSinchIconElement,
  }
}
