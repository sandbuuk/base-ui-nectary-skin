import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-microwave', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-microwave': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-microwave': TSinchIconElement,
  }
}
