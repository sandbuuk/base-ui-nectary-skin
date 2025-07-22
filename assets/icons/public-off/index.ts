import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPublicOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-public-off', IconPublicOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-public-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-public-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-public-off': TSinchIconReact,
    }
  }
}
