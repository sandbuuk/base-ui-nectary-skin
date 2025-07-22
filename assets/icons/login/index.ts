import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLogin = createIconClass(templateHTML)
defineCustomElement('sinch-icon-login', IconLogin)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-login': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-login': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-login': TSinchIconReact,
    }
  }
}
