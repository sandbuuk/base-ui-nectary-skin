import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconOutbond = createIconClass(templateHTML)
defineCustomElement('sinch-icon-outbond', IconOutbond)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-outbond': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-outbond': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-outbond': TSinchIconReact,
    }
  }
}
