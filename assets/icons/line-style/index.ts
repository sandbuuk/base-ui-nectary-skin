import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLineStyle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-line-style', IconLineStyle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-line-style': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-line-style': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-line-style': TSinchIconReact,
    }
  }
}
