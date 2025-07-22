import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatClear = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-clear', IconFormatClear)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-clear': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-clear': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-clear': TSinchIconReact,
    }
  }
}
