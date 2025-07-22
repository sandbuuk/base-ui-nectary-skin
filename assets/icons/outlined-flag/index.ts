import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconOutlinedFlag = createIconClass(templateHTML)
defineCustomElement('sinch-icon-outlined-flag', IconOutlinedFlag)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-outlined-flag': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-outlined-flag': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-outlined-flag': TSinchIconReact,
    }
  }
}
