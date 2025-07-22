import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconContactless = createIconClass(templateHTML)
defineCustomElement('sinch-icon-contactless', IconContactless)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-contactless': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-contactless': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-contactless': TSinchIconReact,
    }
  }
}
