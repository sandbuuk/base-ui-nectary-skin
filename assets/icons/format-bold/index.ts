import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatBold = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-bold', IconFormatBold)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-bold': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-bold': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-bold': TSinchIconReact,
    }
  }
}
