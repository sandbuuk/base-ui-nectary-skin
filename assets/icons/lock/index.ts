import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLock = createIconClass(templateHTML)
defineCustomElement('sinch-icon-lock', IconLock)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-lock': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-lock': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-lock': TSinchIconReact,
    }
  }
}
