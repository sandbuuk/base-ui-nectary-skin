import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const Icon4k = createIconClass(templateHTML)
defineCustomElement('sinch-icon-4k', Icon4k)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-4k': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-4k': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-4k': TSinchIconReact,
    }
  }
}
