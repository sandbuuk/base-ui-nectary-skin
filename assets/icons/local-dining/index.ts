import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalDining = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-dining', IconLocalDining)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-dining': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-dining': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-dining': TSinchIconReact,
    }
  }
}
