import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGraphicEq = createIconClass(templateHTML)
defineCustomElement('sinch-icon-graphic-eq', IconGraphicEq)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-graphic-eq': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-graphic-eq': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-graphic-eq': TSinchIconReact,
    }
  }
}
