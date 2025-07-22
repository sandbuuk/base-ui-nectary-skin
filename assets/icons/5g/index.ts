import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const Icon5g = createIconClass(templateHTML)
defineCustomElement('sinch-icon-5g', Icon5g)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-5g': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-5g': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-5g': TSinchIconReact,
    }
  }
}
