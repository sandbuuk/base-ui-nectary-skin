import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCommentBank = createIconClass(templateHTML)
defineCustomElement('sinch-icon-comment-bank', IconCommentBank)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-comment-bank': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-comment-bank': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-comment-bank': TSinchIconReact,
    }
  }
}
