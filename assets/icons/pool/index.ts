import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPool = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pool', IconPool)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pool': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pool': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pool': TSinchIconReact,
    }
  }
}
