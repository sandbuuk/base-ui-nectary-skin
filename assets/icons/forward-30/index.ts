import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconForward30 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-forward-30', IconForward30)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-forward-30': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-forward-30': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-forward-30': TSinchIconReact,
    }
  }
}
