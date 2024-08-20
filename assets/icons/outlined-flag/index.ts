import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-outlined-flag', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-outlined-flag': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-outlined-flag': TSinchIconElement,
  }
}
