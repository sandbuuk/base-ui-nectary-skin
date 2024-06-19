import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-storage', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-storage': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-storage': TSinchIconElement,
  }
}
