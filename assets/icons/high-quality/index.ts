import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-high-quality', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-high-quality': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-high-quality': TSinchIconElement,
  }
}
