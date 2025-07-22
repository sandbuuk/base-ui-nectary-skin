import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatIndentDecrease = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-indent-decrease', IconFormatIndentDecrease)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-indent-decrease': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-indent-decrease': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-indent-decrease': TSinchIconReact,
    }
  }
}
