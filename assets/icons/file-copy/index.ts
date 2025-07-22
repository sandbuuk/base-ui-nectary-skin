import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFileCopy = createIconClass(templateHTML)
defineCustomElement('sinch-icon-file-copy', IconFileCopy)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-file-copy': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-file-copy': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-file-copy': TSinchIconReact,
    }
  }
}
