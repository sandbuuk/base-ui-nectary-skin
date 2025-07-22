import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCall = createIconClass(templateHTML)
defineCustomElement('sinch-icon-call', IconCall)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-call': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-call': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-call': TSinchIconReact,
    }
  }
}
