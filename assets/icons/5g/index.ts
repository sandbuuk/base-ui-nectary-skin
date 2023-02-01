import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-5g', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-5g': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-5g': TSinchIconElement,
  }
}
