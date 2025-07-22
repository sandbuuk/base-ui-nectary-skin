import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconUnsubscribe = createIconClass(templateHTML)
defineCustomElement('sinch-icon-unsubscribe', IconUnsubscribe)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-unsubscribe': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-unsubscribe': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-unsubscribe': TSinchIconReact,
    }
  }
}
