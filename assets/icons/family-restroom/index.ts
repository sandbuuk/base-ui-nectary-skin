import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-family-restroom', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-family-restroom': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-family-restroom': TSinchIconElement,
  }
}
