import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-format-paint', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-paint': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-format-paint': TSinchIconElement,
  }
}
