import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconError = createIconClass(templateHTML)
defineCustomElement('sinch-icon-error', IconError)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-error': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-error': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-error': TSinchIconReact,
    }
  }
}
