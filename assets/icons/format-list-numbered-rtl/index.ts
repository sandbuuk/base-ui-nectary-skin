import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatListNumberedRtl = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-list-numbered-rtl', IconFormatListNumberedRtl)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-list-numbered-rtl': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-list-numbered-rtl': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-list-numbered-rtl': TSinchIconReact,
    }
  }
}
