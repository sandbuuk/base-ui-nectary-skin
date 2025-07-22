import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconInsertComment = createIconClass(templateHTML)
defineCustomElement('sinch-icon-insert-comment', IconInsertComment)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-insert-comment': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-insert-comment': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-insert-comment': TSinchIconReact,
    }
  }
}
