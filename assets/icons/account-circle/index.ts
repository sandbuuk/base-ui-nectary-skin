import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAccountCircle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-account-circle', IconAccountCircle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-account-circle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-account-circle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-account-circle': TSinchIconReact,
    }
  }
}
