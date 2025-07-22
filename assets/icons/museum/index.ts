import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMuseum = createIconClass(templateHTML)
defineCustomElement('sinch-icon-museum', IconMuseum)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-museum': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-museum': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-museum': TSinchIconReact,
    }
  }
}
