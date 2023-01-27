import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-room-service', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-room-service': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-room-service': TSinchIconElement,
  }
}
