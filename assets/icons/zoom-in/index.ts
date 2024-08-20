import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-zoom-in', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-zoom-in': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-zoom-in': TSinchIconElement,
  }
}
