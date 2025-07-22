import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalShipping = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-shipping', IconLocalShipping)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-shipping': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-shipping': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-shipping': TSinchIconReact,
    }
  }
}
