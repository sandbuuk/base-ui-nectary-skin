import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconComment = createIconClass(templateHTML)
defineCustomElement('sinch-icon-comment', IconComment)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-comment': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-comment': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-comment': TSinchIconReact,
    }
  }
}
