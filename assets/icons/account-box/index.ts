import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAccountBox = createIconClass(templateHTML)
defineCustomElement('sinch-icon-account-box', IconAccountBox)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-account-box': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-account-box': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-account-box': TSinchIconReact,
    }
  }
}
