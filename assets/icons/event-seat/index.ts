import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEventSeat = createIconClass(templateHTML)
defineCustomElement('sinch-icon-event-seat', IconEventSeat)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-event-seat': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-event-seat': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-event-seat': TSinchIconReact,
    }
  }
}
