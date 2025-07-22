import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNat = createIconClass(templateHTML)
defineCustomElement('sinch-icon-nat', IconNat)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-nat': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-nat': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-nat': TSinchIconReact,
    }
  }
}
