import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVisibility = createIconClass(templateHTML)
defineCustomElement('sinch-icon-visibility', IconVisibility)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-visibility': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-visibility': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-visibility': TSinchIconReact,
    }
  }
}
