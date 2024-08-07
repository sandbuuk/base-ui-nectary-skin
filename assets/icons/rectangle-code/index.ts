
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-rectangle-code', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rectangle-code': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-rectangle-code': TSinchIconElement,
  }
}
