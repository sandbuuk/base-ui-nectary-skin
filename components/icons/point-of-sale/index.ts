import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-point-of-sale', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-point-of-sale': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-point-of-sale': TSinchIconElement,
  }
}
