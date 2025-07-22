import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStairs = createIconClass(templateHTML)
defineCustomElement('sinch-icon-stairs', IconStairs)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-stairs': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stairs': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-stairs': TSinchIconReact,
    }
  }
}
