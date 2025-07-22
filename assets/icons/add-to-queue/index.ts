import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddToQueue = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-to-queue', IconAddToQueue)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-to-queue': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-to-queue': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-to-queue': TSinchIconReact,
    }
  }
}
