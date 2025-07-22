import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatLineSpacing = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-line-spacing', IconFormatLineSpacing)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-line-spacing': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-line-spacing': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-line-spacing': TSinchIconReact,
    }
  }
}
