import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-directions-boat', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-directions-boat': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-directions-boat': TSinchIconElement,
  }
}
