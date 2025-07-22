import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNoFlash = createIconClass(templateHTML)
defineCustomElement('sinch-icon-no-flash', IconNoFlash)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-no-flash': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-no-flash': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-no-flash': TSinchIconReact,
    }
  }
}
