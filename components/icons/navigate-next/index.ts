import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-navigate-next', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-navigate-next': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-navigate-next': TSinchIconElement,
  }
}
