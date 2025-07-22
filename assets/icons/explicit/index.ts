import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconExplicit = createIconClass(templateHTML)
defineCustomElement('sinch-icon-explicit', IconExplicit)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-explicit': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-explicit': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-explicit': TSinchIconReact,
    }
  }
}
