import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-pregnant-woman', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pregnant-woman': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-pregnant-woman': TSinchIconElement,
  }
}
