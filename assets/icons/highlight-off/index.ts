import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHighlightOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-highlight-off', IconHighlightOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-highlight-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-highlight-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-highlight-off': TSinchIconReact,
    }
  }
}
