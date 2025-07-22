import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLogout = createIconClass(templateHTML)
defineCustomElement('sinch-icon-logout', IconLogout)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-logout': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-logout': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-logout': TSinchIconReact,
    }
  }
}
