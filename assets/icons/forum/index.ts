import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconForum = createIconClass(templateHTML)
defineCustomElement('sinch-icon-forum', IconForum)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-forum': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-forum': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-forum': TSinchIconReact,
    }
  }
}
