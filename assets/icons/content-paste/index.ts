import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconContentPaste = createIconClass(templateHTML)
defineCustomElement('sinch-icon-content-paste', IconContentPaste)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-content-paste': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-content-paste': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-content-paste': TSinchIconReact,
    }
  }
}
