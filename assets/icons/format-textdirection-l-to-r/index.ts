import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatTextdirectionLToR = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-textdirection-l-to-r', IconFormatTextdirectionLToR)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-textdirection-l-to-r': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-textdirection-l-to-r': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-textdirection-l-to-r': TSinchIconReact,
    }
  }
}
