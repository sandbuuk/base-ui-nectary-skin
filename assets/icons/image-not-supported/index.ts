import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconImageNotSupported = createIconClass(templateHTML)
defineCustomElement('sinch-icon-image-not-supported', IconImageNotSupported)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-image-not-supported': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-image-not-supported': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-image-not-supported': TSinchIconReact,
    }
  }
}
