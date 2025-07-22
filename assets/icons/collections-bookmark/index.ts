import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCollectionsBookmark = createIconClass(templateHTML)
defineCustomElement('sinch-icon-collections-bookmark', IconCollectionsBookmark)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-collections-bookmark': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-collections-bookmark': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-collections-bookmark': TSinchIconReact,
    }
  }
}
