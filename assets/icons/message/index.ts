import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMessage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-message', IconMessage)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-message': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-message': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-message': TSinchIconReact,
    }
  }
}
