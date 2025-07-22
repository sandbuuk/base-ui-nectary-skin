import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCompare = createIconClass(templateHTML)
defineCustomElement('sinch-icon-compare', IconCompare)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-compare': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-compare': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-compare': TSinchIconReact,
    }
  }
}
