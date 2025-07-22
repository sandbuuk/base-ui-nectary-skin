import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTextsms = createIconClass(templateHTML)
defineCustomElement('sinch-icon-textsms', IconTextsms)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-textsms': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-textsms': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-textsms': TSinchIconReact,
    }
  }
}
