import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNotStarted = createIconClass(templateHTML)
defineCustomElement('sinch-icon-not-started', IconNotStarted)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-not-started': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-not-started': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-not-started': TSinchIconReact,
    }
  }
}
