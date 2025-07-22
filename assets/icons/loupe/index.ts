import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLoupe = createIconClass(templateHTML)
defineCustomElement('sinch-icon-loupe', IconLoupe)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-loupe': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-loupe': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-loupe': TSinchIconReact,
    }
  }
}
