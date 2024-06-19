import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-assignment-turned-in', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-assignment-turned-in': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-assignment-turned-in': TSinchIconElement,
  }
}
