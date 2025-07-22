import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconIso = createIconClass(templateHTML)
defineCustomElement('sinch-icon-iso', IconIso)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-iso': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-iso': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-iso': TSinchIconReact,
    }
  }
}
