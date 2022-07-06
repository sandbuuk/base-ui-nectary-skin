import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-directions-walk', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-directions-walk': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-directions-walk': TSinchIconElement,
  }
}
