import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGradient = createIconClass(templateHTML)
defineCustomElement('sinch-icon-gradient', IconGradient)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-gradient': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-gradient': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-gradient': TSinchIconReact,
    }
  }
}
