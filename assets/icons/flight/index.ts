import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFlight = createIconClass(templateHTML)
defineCustomElement('sinch-icon-flight', IconFlight)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-flight': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flight': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-flight': TSinchIconReact,
    }
  }
}
