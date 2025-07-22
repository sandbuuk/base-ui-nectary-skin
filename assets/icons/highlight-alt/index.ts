import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHighlightAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-highlight-alt', IconHighlightAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-highlight-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-highlight-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-highlight-alt': TSinchIconReact,
    }
  }
}
