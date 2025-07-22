import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLockOpen = createIconClass(templateHTML)
defineCustomElement('sinch-icon-lock-open', IconLockOpen)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-lock-open': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-lock-open': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-lock-open': TSinchIconReact,
    }
  }
}
