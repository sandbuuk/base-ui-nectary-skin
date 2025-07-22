import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArchitecture = createIconClass(templateHTML)
defineCustomElement('sinch-icon-architecture', IconArchitecture)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-architecture': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-architecture': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-architecture': TSinchIconReact,
    }
  }
}
