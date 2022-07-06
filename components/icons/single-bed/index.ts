import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-single-bed', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-single-bed': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-single-bed': TSinchIconElement,
  }
}
