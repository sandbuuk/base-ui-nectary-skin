import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPhonelinkOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-phonelink-off', IconPhonelinkOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-phonelink-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-phonelink-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-phonelink-off': TSinchIconReact,
    }
  }
}
