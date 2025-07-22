import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddComment = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-comment', IconAddComment)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-comment': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-comment': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-comment': TSinchIconReact,
    }
  }
}
