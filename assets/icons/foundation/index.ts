import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFoundation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-foundation', IconFoundation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-foundation': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-foundation': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-foundation': TSinchIconReact,
    }
  }
}
