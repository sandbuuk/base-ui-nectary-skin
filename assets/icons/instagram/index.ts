
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-instagram', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-instagram': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-instagram': TSinchIconElement,
  }
}
