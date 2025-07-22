import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLinkOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-link-off', IconLinkOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-link-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-link-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-link-off': TSinchIconReact,
    }
  }
}
