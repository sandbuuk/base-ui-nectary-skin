import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatStrikethrough = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-strikethrough', IconFormatStrikethrough)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-strikethrough': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-strikethrough': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-strikethrough': TSinchIconReact,
    }
  }
}
