import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCallSplit = createIconClass(templateHTML)
defineCustomElement('sinch-icon-call-split', IconCallSplit)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-call-split': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-call-split': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-call-split': TSinchIconReact,
    }
  }
}
