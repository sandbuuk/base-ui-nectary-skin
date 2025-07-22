import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLockOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-lock-outline', IconLockOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-lock-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-lock-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-lock-outline': TSinchIconReact,
    }
  }
}
