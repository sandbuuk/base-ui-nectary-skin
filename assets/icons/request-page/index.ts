import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRequestPage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-request-page', IconRequestPage)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-request-page': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-request-page': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-request-page': TSinchIconReact,
    }
  }
}
