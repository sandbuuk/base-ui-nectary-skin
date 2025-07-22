import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatItalic = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-italic', IconFormatItalic)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-italic': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-italic': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-italic': TSinchIconReact,
    }
  }
}
