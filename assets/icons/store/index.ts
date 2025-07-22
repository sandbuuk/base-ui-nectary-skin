import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStore = createIconClass(templateHTML)
defineCustomElement('sinch-icon-store', IconStore)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-store': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-store': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-store': TSinchIconReact,
    }
  }
}
