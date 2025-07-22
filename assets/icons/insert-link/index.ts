import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconInsertLink = createIconClass(templateHTML)
defineCustomElement('sinch-icon-insert-link', IconInsertLink)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-insert-link': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-insert-link': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-insert-link': TSinchIconReact,
    }
  }
}
