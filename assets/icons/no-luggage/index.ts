import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNoLuggage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-no-luggage', IconNoLuggage)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-no-luggage': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-no-luggage': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-no-luggage': TSinchIconReact,
    }
  }
}
