import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCode = createIconClass(templateHTML)
defineCustomElement('sinch-icon-code', IconCode)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-code': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-code': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-code': TSinchIconReact,
    }
  }
}
