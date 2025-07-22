import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatTextdirectionRToL = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-textdirection-r-to-l', IconFormatTextdirectionRToL)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-textdirection-r-to-l': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-textdirection-r-to-l': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-textdirection-r-to-l': TSinchIconReact,
    }
  }
}
