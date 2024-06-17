import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-content-cut', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-content-cut': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-content-cut': TSinchIconElement,
  }
}
