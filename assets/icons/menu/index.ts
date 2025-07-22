import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMenu = createIconClass(templateHTML)
defineCustomElement('sinch-icon-menu', IconMenu)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-menu': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-menu': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-menu': TSinchIconReact,
    }
  }
}
