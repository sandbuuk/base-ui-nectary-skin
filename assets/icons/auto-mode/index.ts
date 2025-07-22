import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAutoMode = createIconClass(templateHTML)
defineCustomElement('sinch-icon-auto-mode', IconAutoMode)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-auto-mode': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-auto-mode': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-auto-mode': TSinchIconReact,
    }
  }
}
