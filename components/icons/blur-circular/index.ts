import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-blur-circular', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-blur-circular': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-blur-circular': TSinchIconElement,
  }
}
