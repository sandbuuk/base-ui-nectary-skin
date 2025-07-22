import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDepartureBoard = createIconClass(templateHTML)
defineCustomElement('sinch-icon-departure-board', IconDepartureBoard)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-departure-board': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-departure-board': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-departure-board': TSinchIconReact,
    }
  }
}
