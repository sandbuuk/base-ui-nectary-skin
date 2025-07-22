import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAccessTime = createIconClass(templateHTML)
defineCustomElement('sinch-icon-access-time', IconAccessTime)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-access-time': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-access-time': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-access-time': TSinchIconReact,
    }
  }
}
