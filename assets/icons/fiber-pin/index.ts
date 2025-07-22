import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFiberPin = createIconClass(templateHTML)
defineCustomElement('sinch-icon-fiber-pin', IconFiberPin)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-fiber-pin': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fiber-pin': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-fiber-pin': TSinchIconReact,
    }
  }
}
