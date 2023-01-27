import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-two-wheeler', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-two-wheeler': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-two-wheeler': TSinchIconElement,
  }
}
