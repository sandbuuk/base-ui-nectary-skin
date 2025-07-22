import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPhonelinkRing = createIconClass(templateHTML)
defineCustomElement('sinch-icon-phonelink-ring', IconPhonelinkRing)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-phonelink-ring': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-phonelink-ring': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-phonelink-ring': TSinchIconReact,
    }
  }
}
