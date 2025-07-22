import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBookmarks = createIconClass(templateHTML)
defineCustomElement('sinch-icon-bookmarks', IconBookmarks)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-bookmarks': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-bookmarks': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-bookmarks': TSinchIconReact,
    }
  }
}
