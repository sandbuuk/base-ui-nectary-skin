import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMobileOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-mobile-off', IconMobileOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-mobile-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mobile-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-mobile-off': TSinchIconReact,
    }
  }
}
