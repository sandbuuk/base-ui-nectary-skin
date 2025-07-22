import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTextSnippet = createIconClass(templateHTML)
defineCustomElement('sinch-icon-text-snippet', IconTextSnippet)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-text-snippet': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-text-snippet': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-text-snippet': TSinchIconReact,
    }
  }
}
