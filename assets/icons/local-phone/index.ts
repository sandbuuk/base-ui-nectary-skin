import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalPhone = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-phone', IconLocalPhone)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-phone': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-phone': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-phone': TSinchIconReact,
    }
  }
}
