import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatColorReset = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-color-reset', IconFormatColorReset)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-color-reset': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-color-reset': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-color-reset': TSinchIconReact,
    }
  }
}
