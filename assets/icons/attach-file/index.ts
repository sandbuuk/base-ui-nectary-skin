import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAttachFile = createIconClass(templateHTML)
defineCustomElement('sinch-icon-attach-file', IconAttachFile)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-attach-file': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-attach-file': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-attach-file': TSinchIconReact,
    }
  }
}
