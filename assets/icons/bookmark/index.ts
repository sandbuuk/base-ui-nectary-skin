import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBookmark = createIconClass(templateHTML)
defineCustomElement('sinch-icon-bookmark', IconBookmark)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-bookmark': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-bookmark': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-bookmark': TSinchIconReact,
    }
  }
}
