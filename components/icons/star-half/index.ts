import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-star-half', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-star-half': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-star-half': TSinchIconElement,
  }
}
