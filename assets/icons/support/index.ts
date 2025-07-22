import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSupport = createIconClass(templateHTML)
defineCustomElement('sinch-icon-support', IconSupport)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-support': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-support': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-support': TSinchIconReact,
    }
  }
}
