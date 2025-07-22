import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconReduceCapacity = createIconClass(templateHTML)
defineCustomElement('sinch-icon-reduce-capacity', IconReduceCapacity)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-reduce-capacity': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-reduce-capacity': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-reduce-capacity': TSinchIconReact,
    }
  }
}
