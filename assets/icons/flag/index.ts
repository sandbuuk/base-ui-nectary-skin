import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFlag = createIconClass(templateHTML)
defineCustomElement('sinch-icon-flag', IconFlag)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-flag': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flag': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-flag': TSinchIconReact,
    }
  }
}
