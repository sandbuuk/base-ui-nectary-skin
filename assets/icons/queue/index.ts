import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconQueue = createIconClass(templateHTML)
defineCustomElement('sinch-icon-queue', IconQueue)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-queue': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-queue': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-queue': TSinchIconReact,
    }
  }
}
