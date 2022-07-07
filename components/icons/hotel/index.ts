import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-hotel', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hotel': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-hotel': TSinchIconElement,
  }
}
