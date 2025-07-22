import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRemoveFromQueue = createIconClass(templateHTML)
defineCustomElement('sinch-icon-remove-from-queue', IconRemoveFromQueue)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-remove-from-queue': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-remove-from-queue': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-remove-from-queue': TSinchIconReact,
    }
  }
}
