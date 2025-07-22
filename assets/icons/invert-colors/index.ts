import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconInvertColors = createIconClass(templateHTML)
defineCustomElement('sinch-icon-invert-colors', IconInvertColors)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-invert-colors': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-invert-colors': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-invert-colors': TSinchIconReact,
    }
  }
}
