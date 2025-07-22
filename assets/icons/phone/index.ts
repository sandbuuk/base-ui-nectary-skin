import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPhone = createIconClass(templateHTML)
defineCustomElement('sinch-icon-phone', IconPhone)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-phone': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-phone': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-phone': TSinchIconReact,
    }
  }
}
