import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconClose = createIconClass(templateHTML)
defineCustomElement('sinch-icon-close', IconClose)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-close': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-close': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-close': TSinchIconReact,
    }
  }
}
