import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-child-friendly', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-child-friendly': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-child-friendly': TSinchIconElement,
  }
}
