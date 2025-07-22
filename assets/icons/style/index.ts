import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStyle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-style', IconStyle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-style': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-style': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-style': TSinchIconReact,
    }
  }
}
