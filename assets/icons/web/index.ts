import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWeb = createIconClass(templateHTML)
defineCustomElement('sinch-icon-web', IconWeb)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-web': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-web': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-web': TSinchIconReact,
    }
  }
}
