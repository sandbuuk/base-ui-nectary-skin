import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCommute = createIconClass(templateHTML)
defineCustomElement('sinch-icon-commute', IconCommute)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-commute': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-commute': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-commute': TSinchIconReact,
    }
  }
}
