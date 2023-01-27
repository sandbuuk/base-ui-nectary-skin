import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-upload', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-upload': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-upload': TSinchIconElement,
  }
}
