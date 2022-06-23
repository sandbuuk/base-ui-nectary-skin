import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-event-seat', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-event-seat': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-event-seat': TSinchIconElement,
  }
}
