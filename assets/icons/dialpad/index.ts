import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDialpad = createIconClass(templateHTML)
defineCustomElement('sinch-icon-dialpad', IconDialpad)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-dialpad': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-dialpad': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-dialpad': TSinchIconReact,
    }
  }
}
