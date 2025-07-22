import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSmartphone = createIconClass(templateHTML)
defineCustomElement('sinch-icon-smartphone', IconSmartphone)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-smartphone': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-smartphone': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-smartphone': TSinchIconReact,
    }
  }
}
