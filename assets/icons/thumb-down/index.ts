import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconThumbDown = createIconClass(templateHTML)
defineCustomElement('sinch-icon-thumb-down', IconThumbDown)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-thumb-down': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-thumb-down': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-thumb-down': TSinchIconReact,
    }
  }
}
