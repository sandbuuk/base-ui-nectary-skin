import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconForward10 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-forward-10', IconForward10)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-forward-10': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-forward-10': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-forward-10': TSinchIconReact,
    }
  }
}
