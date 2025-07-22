import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMenuOpen = createIconClass(templateHTML)
defineCustomElement('sinch-icon-menu-open', IconMenuOpen)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-menu-open': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-menu-open': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-menu-open': TSinchIconReact,
    }
  }
}
