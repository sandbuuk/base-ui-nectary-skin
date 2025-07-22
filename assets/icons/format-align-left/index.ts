import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatAlignLeft = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-align-left', IconFormatAlignLeft)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-align-left': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-align-left': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-align-left': TSinchIconReact,
    }
  }
}
