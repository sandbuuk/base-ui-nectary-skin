import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatUnderlined = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-underlined', IconFormatUnderlined)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-underlined': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-underlined': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-underlined': TSinchIconReact,
    }
  }
}
