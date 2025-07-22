import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconOutlet = createIconClass(templateHTML)
defineCustomElement('sinch-icon-outlet', IconOutlet)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-outlet': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-outlet': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-outlet': TSinchIconReact,
    }
  }
}
