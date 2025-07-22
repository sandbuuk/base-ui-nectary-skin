import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatAlignRight = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-align-right', IconFormatAlignRight)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-align-right': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-align-right': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-align-right': TSinchIconReact,
    }
  }
}
