import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLuggage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-luggage', IconLuggage)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-luggage': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-luggage': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-luggage': TSinchIconReact,
    }
  }
}
