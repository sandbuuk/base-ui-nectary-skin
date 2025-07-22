import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatAlignCenter = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-align-center', IconFormatAlignCenter)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-align-center': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-align-center': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-align-center': TSinchIconReact,
    }
  }
}
