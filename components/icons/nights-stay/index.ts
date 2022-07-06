import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-nights-stay', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-nights-stay': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-nights-stay': TSinchIconElement,
  }
}
