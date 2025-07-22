import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNavigateNext = createIconClass(templateHTML)
defineCustomElement('sinch-icon-navigate-next', IconNavigateNext)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-navigate-next': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-navigate-next': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-navigate-next': TSinchIconReact,
    }
  }
}
