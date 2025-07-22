import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPersonPin = createIconClass(templateHTML)
defineCustomElement('sinch-icon-person-pin', IconPersonPin)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-person-pin': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-person-pin': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-person-pin': TSinchIconReact,
    }
  }
}
