import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-battery-std', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-battery-std': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-battery-std': TSinchIconElement,
  }
}
