import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatIndentIncrease = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-indent-increase', IconFormatIndentIncrease)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-indent-increase': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-indent-increase': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-indent-increase': TSinchIconReact,
    }
  }
}
