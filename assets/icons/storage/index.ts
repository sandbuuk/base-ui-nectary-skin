import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStorage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-storage', IconStorage)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-storage': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-storage': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-storage': TSinchIconReact,
    }
  }
}
