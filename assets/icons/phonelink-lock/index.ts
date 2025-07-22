import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPhonelinkLock = createIconClass(templateHTML)
defineCustomElement('sinch-icon-phonelink-lock', IconPhonelinkLock)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-phonelink-lock': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-phonelink-lock': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-phonelink-lock': TSinchIconReact,
    }
  }
}
