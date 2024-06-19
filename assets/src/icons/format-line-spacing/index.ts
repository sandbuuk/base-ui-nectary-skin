import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-format-line-spacing', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-line-spacing': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-format-line-spacing': TSinchIconElement,
  }
}
