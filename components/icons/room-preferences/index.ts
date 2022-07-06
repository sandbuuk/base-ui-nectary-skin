import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-room-preferences', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-room-preferences': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-room-preferences': TSinchIconElement,
  }
}
