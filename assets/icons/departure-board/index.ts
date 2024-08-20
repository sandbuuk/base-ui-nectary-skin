import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-departure-board', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-departure-board': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-departure-board': TSinchIconElement,
  }
}
